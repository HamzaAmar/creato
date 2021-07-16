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
      <circle cx={7.5} cy={7.5} r={7.5} fill="url(#gradient)" />
      <rect
        x={7.033}
        y={11.977}
        width={2.206}
        height={8.485}
        rx={1.103}
        transform="rotate(-142.022 7.033 11.977)"
        fill="#fff"
      />
      <rect
        width={2.206}
        height={5.444}
        rx={1.103}
        transform="scale(-1 1) rotate(37.978 -12.029 -3.705)"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="gradient"
          x1={0}
          y1={6.618}
          x2={17.427}
          y2={6.176}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6D6AFE" />
          <stop offset={1} stopColor="#558FFA" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgComponent;
