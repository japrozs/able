import { useRouter } from "next/router";
import React from "react";
import { useMeQuery } from "../generated/graphql";

const Home = () => {
    const { data, loading } = useMeQuery();
    const router = useRouter();
    if (!loading && data?.me != null) {
        router.push("/app");
    }
    return (
        <div className="p-2">
            <p className="text-purple-500 menlo">hi there</p>
        </div>
    );
};

export default Home;
