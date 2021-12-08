import React, { Fragment } from "react";
import { useMeQuery } from "../../generated/graphql";
import { BiChevronDown, BiCog, BiLogOut } from "react-icons/bi";
import { Menu, Transition } from "@headlessui/react";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
    const { data, loading } = useMeQuery();
    return (
        <div className="flex items-center h-12 bg-gray-100 border-b border-gray-300">
            <Menu as="div" className="w-48 ml-auto mr-2">
                <div>
                    <Menu.Button className="flex items-center w-full cursor-pointer group">
                        <img
                            className="h-auto rounded-sm w-7"
                            src={data?.me?.imgUrl}
                            alt={data?.me?.name}
                        />
                        <p className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                            {data?.me?.name}
                        </p>
                        <BiChevronDown className="w-5 h-5 ml-auto mr-0 text-gray-700" />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute left-auto z-20 mt-2 origin-top bg-white border border-gray-300 divide-y divide-gray-100 rounded-md shadow-lg top-9 w-52 right-1 focus:outline-none">
                        <div className="p-1">
                            <div className="flex items-center p-2 bg-gray-800 rounded-md">
                                <img
                                    className="h-auto rounded-sm w-7"
                                    src={data?.me?.imgUrl}
                                    alt={data?.me?.name}
                                />
                                <p className="ml-2 text-sm font-medium text-white">
                                    {data?.me?.name}
                                </p>
                            </div>
                            <hr className="my-1 mt-2 text-gray-300" />
                            <div className="my-1 flex items-center p-1 cursor-pointer group py-1.5 hover:bg-gray-100 rounded-sm">
                                <BiCog className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
                                <p className="ml-2 text-sm text-gray-500 group-hover:text-gray-700">
                                    Account Settings
                                </p>
                            </div>
                            <div className="my-1 flex items-center p-1 cursor-pointer group py-1.5 hover:bg-gray-100 rounded-sm">
                                <BiLogOut className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
                                <p className="ml-2 text-sm text-gray-500 group-hover:text-gray-700">
                                    Sign Out
                                </p>
                            </div>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
};
