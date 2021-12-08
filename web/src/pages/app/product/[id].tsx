import React from "react";
import { Wrapper } from "../../../components/ui/Wrapper";
import { useGetProductQuery } from "../../../generated/graphql";
import { BiGlobe, BiCog, BiCoinStack, BiPencil } from "react-icons/bi";
import { Tab } from "@headlessui/react";
import { KeyPanel } from "../../../components/ui/panels/KeyPanel";
import { ProductSettingsPanel } from "../../../components/ui/panels/ProductSettingsPanel";
import { useRouter } from "next/router";

interface ProductPageProps {}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

const ProductPage: React.FC<ProductPageProps> = ({}) => {
    const router = useRouter();
    const id =
        typeof router.query.id == "string" ? parseInt(router.query.id) : -1;
    const { data, loading } = useGetProductQuery({
        variables: {
            id: 1,
        },
    });
    return (
        <Wrapper>
            {data && !loading ? (
                <div className="p-2 px-4">
                    <p className="mb-2 text-xs font-medium text-gray-700">
                        PRODUCT
                    </p>
                    <div className="flex items-center">
                        <BiGlobe className="text-2xl text-gray-800" />
                        <p className="ml-2 text-2xl font-medium text-gray-800">
                            {data.getProduct.name}
                        </p>
                        <p className="p-1 ml-5 text-xs font-semibold text-gray-800 bg-gray-200 rounded-sm">
                            PRODUCT
                        </p>
                    </div>
                    <p className="flex items-center mt-1 text-gray-700 ">
                        <BiPencil className="p-1 mr-2 text-2xl rounded-full cursor-pointer hover:bg-gray-100" />
                        {data.getProduct.description || "No Description"}
                    </p>
                    <Tab.Group>
                        <Tab.List className="flex p-1 mt-3 overflow-y-scroll no-scrollbar">
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        "mr-10 flex items-center py-2.5 text-sm leading-5 border-b  border-transparent font-medium  focus:outline-none",
                                        selected
                                            ? " border-gray-900 text-gray-900"
                                            : "text-gray-500 hover:border-gray-300"
                                    )
                                }
                            >
                                <BiCoinStack className={"mr-2 text-base"} />
                                Keys
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        "mr-10 flex items-center py-2.5 text-sm border-b   border-transparent leading-5 font-medium  focus:outline-none ",
                                        selected
                                            ? "border-gray-900 text-gray-900"
                                            : "text-gray-500 hover:border-gray-300"
                                    )
                                }
                            >
                                <BiCog className={"mr-2 text-base"} />
                                Settings
                            </Tab>
                        </Tab.List>
                        <Tab.Panels className="mt-2">
                            <Tab.Panel className={"focus:outline-none"}>
                                <KeyPanel product={data.getProduct} />
                            </Tab.Panel>
                            <Tab.Panel className={"focus:outline-none"}>
                                <ProductSettingsPanel />
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            ) : (
                <div>
                    <h1>loading....</h1>
                </div>
            )}
        </Wrapper>
    );
};

export default ProductPage;
