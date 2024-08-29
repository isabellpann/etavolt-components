import React from "react";

const Date: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
      d="M11.625 8.5V10.375M20.375 8.5V10.375M8.5 21.625V12.25C8.5 11.2145 9.33947 10.375 10.375 10.375H21.625C22.6605 10.375 23.5 11.2145 23.5 12.25V21.625M8.5 21.625C8.5 22.6605 9.33947 23.5 10.375 23.5H21.625C22.6605 23.5 23.5 22.6605 23.5 21.625M8.5 21.625V15.375C8.5 14.3395 9.33947 13.5 10.375 13.5H21.625C22.6605 13.5 23.5 14.3395 23.5 15.375V21.625"
      stroke="#111827"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Date;
