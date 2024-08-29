import React from "react";

const SolarType: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      d="M21 19L16 14L11 19"
      stroke="#1F2937"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SolarType;
