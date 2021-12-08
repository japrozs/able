import { useApolloClient } from "@apollo/client";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { InputField } from "../components/ui/InputField";
import { useRegisterMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
    const [registerMut] = useRegisterMutation();
    const router = useRouter();
    const client = useApolloClient();
    return (
        <div className="m-5 sm:m-0">
            <div className="max-w-sm mx-auto mt-3">
                <h1 className="mb-4 text-3xl font-semibold text-gray-800">
                    Register
                </h1>
                <Formik
                    initialValues={{ name: "", email: "", password: "" }}
                    onSubmit={async (values, { setErrors }) => {
                        const res = await registerMut({
                            variables: {
                                options: values,
                            },
                        });
                        if (res.data?.register.errors) {
                            setErrors(toErrorMap(res.data.register.errors));
                        } else if (res.data?.register.user) {
                            router.push("/app");
                            await client.resetStore();
                        }
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <InputField
                                name="name"
                                placeholder="Name"
                                label="Name"
                            />
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
                                Register
                            </button>
                            <p className="mt-6 text-sm text-gray-500">
                                Already have an account?{" "}
                                <span
                                    className="font-medium text-gray-800 cursor-pointer"
                                    onClick={() => router.push("/login")}
                                >
                                    Login
                                </span>
                            </p>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Register;
