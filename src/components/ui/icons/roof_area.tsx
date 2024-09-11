import React from "react";

const RoofArea: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      d="M12.875 23.5V19.4375C12.875 18.9197 13.2947 18.5 13.8125 18.5H15.6875C16.2053 18.5 16.625 18.9197 16.625 19.4375V23.5M16.625 23.5H20.375V8.95455M16.625 23.5H22.875V14.9583M7.875 23.5H9.125M24.125 23.5H9.125M7.875 13.5L11.625 12.1364M21.625 8.5L20.375 8.95455M20.375 14.125L22.875 14.9583M24.125 15.375L22.875 14.9583M11.625 12.1364V8.5H9.125V23.5M11.625 12.1364L20.375 8.95455"
      stroke="#111827"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default RoofArea;
