import React from "react";
import { BiFolder, BiTime } from "react-icons/bi";
import { RegularProductFragment } from "../../../generated/graphql";
import { timeSince } from "../../../utils/timeSince";
import NextLink from "next/link";

interface ProductCardProps {
    product: RegularProductFragment;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <NextLink href={`/app/product/${product.id}`}>
            <a>
                <div className="flex items-center p-2 my-1 transition duration-75 border border-transparent rounded-sm cursor-pointer hover:bg-gray-100 hover:border-gray-300">
                    <div className="flex items-center w-full">
                        <BiFolder className="mr-3 text-lg text-gray-800 fill-current" />
                        <p className="text-gray-900 transition duration-75 menlo hover:text-link-blue hover:underline">
                            {product.name}
                        </p>
                    </div>
                    <p
                        className="flex items-center hidden w-full text-gray-700 truncate md:block hover:text-gray-800"
                        style={{
                            fontSize: "15px",
                        }}
                    >
                        {product.description || "No description"}
                    </p>
                    <div className="flex items-center w-full text-right">
                        <div className="flex items-center ml-auto mr-0">
                            <BiTime className="mr-2 text-lg text-gray-800 fill-current " />
                            <p className="text-sm text-gray-900">
                                {timeSince(product.createdAt)} ago
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </NextLink>
    );
};
