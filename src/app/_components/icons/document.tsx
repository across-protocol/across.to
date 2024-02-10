import { SVGProps } from "react";

export function DocumentIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.5007 1.66675H5.00065C4.55862 1.66675 4.1347 1.84234 3.82214 2.1549C3.50958 2.46746 3.33398 2.89139 3.33398 3.33341V16.6667C3.33398 17.1088 3.50958 17.5327 3.82214 17.8453C4.1347 18.1578 4.55862 18.3334 5.00065 18.3334H15.0007C15.4427 18.3334 15.8666 18.1578 16.1792 17.8453C16.4917 17.5327 16.6673 17.1088 16.6673 16.6667V5.83341L12.5007 1.66675Z"
        stroke="white"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2V4.66667C12 5.02029 12.1756 5.35943 12.4882 5.60948C12.8007 5.85952 13.2246 6 13.6667 6H16"
        stroke="white"
        stroke-linecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
