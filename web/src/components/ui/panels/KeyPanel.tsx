import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { RegularProductFragment } from "../../../generated/graphql";

interface KeyPanelProps {
    product: RegularProductFragment;
}

export const KeyPanel: React.FC<KeyPanelProps> = ({ product }) => {
    return (
        <div>
            {product.keys.map((key) => (
                <div className="flex items-center my-1" key={key.id}>
                    <p className="w-full menlo">{key.name}</p>
                    <div className="flex items-center ml-auto mr-1">
                        <p className="hidden p-1 m-1 truncate bg-gray-100 border border-gray-300 rounded-sm shadow-sm md:block w-96 menlo key-value">
                            {key.value}
                        </p>
                        <BiDotsVerticalRounded className="ml-1 text-xl text-gray-500 transition duration-75 cursor-pointer hover:text-gray-800" />
                    </div>
                </div>
            ))}
        </div>
    );
};
