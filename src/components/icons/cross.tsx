import * as React from 'react';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={15}
      height={15}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={7.5} cy={7.5} r={7.5} fill="#B8B8B8" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.356 3.695a1.05 1.05 0 011.473.181l1.655 2.12 1.655-2.12a1.049 1.049 0 111.654 1.291L8.815 7.701l1.978 2.534a1.05 1.05 0 01-1.654 1.291l-1.655-2.12-1.655 2.12a1.049 1.049 0 11-1.654-1.291L6.153 7.7 4.175 5.167a1.05 1.05 0 01.181-1.472z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgComponent;
