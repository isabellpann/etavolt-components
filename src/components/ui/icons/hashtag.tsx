import React from "react";

const Hashtag: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      d="M10.375 12.875H22.875M9.125 19.125H21.625M20.125 7.875L16.875 24.125M15.1252 7.875L11.8752 24.125"
      stroke="#111827"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Hashtag;
