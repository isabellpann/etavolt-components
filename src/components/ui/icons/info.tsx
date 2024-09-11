import React from "react";
import {
    EtvoltHoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";

interface InfoIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    iconColor?: string;
}

const InfoIconButton: React.FC<InfoIconButtonProps> = ({ iconColor = "#757575", ...buttonProps }) => (
    <EtvoltHoverCard>
        <HoverCardTrigger asChild>
            <button
                {...buttonProps}
                className="flex items-center justify-center p-2 rounded-full bg-transparent border-none outline-none cursor-pointer"
                aria-label="Information"
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.77778 11.1111H8V8H7.22222M8 4.88889H8.00778M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
                        stroke={iconColor}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </HoverCardTrigger>
        <HoverCardContent className="absolute left-full top-1/2 transform -translate-x-2 -translate-y-1/3 bg-[#757575] w-auto w-32 text-xs text-white p-2 rounded shadow-lg">
            More information
        </HoverCardContent>
    </EtvoltHoverCard>
);

export default InfoIconButton;
