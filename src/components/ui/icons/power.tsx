import React from "react";

const Power: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="32" height="32" rx="16" fill="#F3F4F6" />
    <path
      d="M9.125 17.25L17.875 7.875L16 14.75H22.875L14.125 24.125L16 17.25H9.125Z"
      stroke="#1F2937"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Power;
