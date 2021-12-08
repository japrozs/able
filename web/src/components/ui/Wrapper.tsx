import React from "react";
import { Navbar } from "../shared/Navbar";
import { Sidebar } from "../shared/Sidebar";

interface WrapperProps {}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="w-full bg-gray-50">
                <Navbar />
                {children}
            </div>
        </div>
    );
};
