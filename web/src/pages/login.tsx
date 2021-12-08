import { useApolloClient } from "@apollo/client";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { InputField } from "../components/ui/InputField";
import {
    useForgotPasswordMutation,
    useLoginMutation,
} from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
    const [loginMut] = useLoginMutation();
    const router = useRouter();
    const client = useApolloClient();

    return (
        <div className="m-5 sm:m-0">
            <div className="max-w-sm mx-auto mt-3">
                <h1 className="mb-4 text-3xl font-semibold text-gray-800">
                    Login
                </h1>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={async (values, { setErrors }) => {
                        const response = await loginMut({ variables: values });
                        if (response.data?.login.errors) {
                            setErrors(toErrorMap(response.data.login.errors));
                        } else if (response.data?.login.user) {
                            if (typeof router.query.next === "string") {
                                router.push(router.query.next);
                            } else {
                                // worked
                                await client.resetStore();
                                router.push("/app");
                            }
                        }
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <InputField
                                name="email"
                                placeholder="Email"
                                label="Email"
                            />
                            <InputField
                                name="password"
                                placeholder="Password"
                                label="Password"
                                type={"password"}
                            />
                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="w-full mt-4 py-2 px-1.5 bg-gray-800 transition duration-75 rounded-sm text-white font-medium text-sm hover:opacity-95"
                            >
                                Login
                            </button>
                            <p className="mt-3 text-sm text-gray-500">
                                Don{"'"}t have an account?{" "}
                                <span
                                    className="font-medium text-gray-800 cursor-pointer"
                                    onClick={() => router.push("/register")}
                                >
                                    Sign up
                                </span>
                            </p>
                            <p
                                onClick={() => router.push("/forgotpass")}
                                className="mt-3 ml-auto mr-0 text-sm font-medium text-gray-700 cursor-pointer"
                            >
                                Forgot password
                            </p>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Login;
