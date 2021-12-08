import React from "react";
import { BiHomeCircle, BiAlignJustify, BiCog } from "react-icons/bi";

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = ({}) => {
    return (
        <div className="flex flex-col items-center pt-2 cursor-pointer w-14 bg-black-pantone">
            <svg
                className="w-auto mb-3 h-9"
                width="171"
                height="171"
                viewBox="0 0 171 171"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_d_22_34)">
                    <rect
                        x="4"
                        width="163"
                        height="163"
                        rx="26"
                        fill="#FCFAFA"
                    />
                    <path
                        d="M65.5854 61.6991V7.59353L85.719 27.2531V82.2923L65.5854 61.6991Z"
                        fill="#252020"
                        stroke="white"
                        strokeWidth="0.5"
                    />
                    <path
                        d="M105.415 101.301V155.406L85.281 135.747V80.7077L105.415 101.301Z"
                        fill="#252020"
                        stroke="white"
                        strokeWidth="0.5"
                    />
                    <path
                        d="M64.7449 101.398L10.5942 101.398L30.2698 81.2814L85.3549 81.2814L64.7449 101.398Z"
                        fill="#252020"
                        stroke="white"
                        strokeWidth="0.5"
                    />
                    <path
                        d="M139.776 81.7186L85.6252 81.7186L105.301 61.6022L160.386 61.6022L139.776 81.7186Z"
                        fill="#252020"
                        stroke="white"
                        strokeWidth="0.5"
                    />
                    <path
                        d="M123.777 43.9087L104.112 62.6428L104.113 35.6888L123.777 16.9546L123.777 43.9087Z"
                        fill="#252020"
                        stroke="white"
                        strokeWidth="0.5"
                    />
                    <path
                        d="M65.6277 127.311L45.9634 146.045L45.9635 119.091L65.6277 100.357L65.6277 127.311Z"
                        fill="#252020"
                        stroke="white"
                        strokeWidth="0.5"
                    />
                    <path
                        d="M46.9402 41.9541L65.7581 61.537L38.7817 61.6304L19.9638 42.0476L46.9402 41.9541Z"
                        fill="#252020"
                        stroke="white"
                        strokeWidth="0.5"
                    />
                    <path
                        d="M132.288 100.992L151.106 120.575L124.129 120.668L105.312 101.085L132.288 100.992Z"
                        fill="#252020"
                        stroke="white"
                        strokeWidth="0.5"
                    />
                    <rect
                        x="7.5"
                        y="3.5"
                        width="156"
                        height="156"
                        rx="25.5"
                        stroke="#E3DFDF"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_d_22_34"
                        x="0"
                        y="0"
                        width="171"
                        height="171"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_22_34"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_22_34"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>
            <BiHomeCircle className="p-2 text-white rounded-sm cursor-pointer w-9 h-9 hover:bg-gray-800" />
            <BiAlignJustify className="p-2 mt-2 text-white rounded-sm cursor-pointer w-9 h-9 hover:bg-gray-800" />
            <BiCog className="p-2 mt-auto mb-2 text-white rounded-sm cursor-pointer w-9 h-9 hover:bg-gray-800" />
        </div>
    );
};
