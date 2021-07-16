import * as React from 'react';

function VerticalDot(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      fill="white"
      {...props}
    >
      <path d="M23 12a6 6 0 110-12 6 6 0 010 12zm0 17a6 6 0 110-12 6 6 0 010 12zm0 17a6 6 0 110-13 6 6 0 010 13z" />
    </svg>
  );
}

export default VerticalDot;
