import * as React from 'react';

function truck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M436.4 164.8H330.7v191.6H504v-86.2l-20.2-69.8c-6-21.1-25.3-35.6-47.3-35.6"
        fill="#ff7058"
      />
      <path
        d="M478.6 269.3l-18-62.2a25.3 25.3 0 00-24.2-18.2h-81.6v80.4h123.8z"
        fill="#84dbff"
      />
      <path fill="#cdd6e0" d="M478.7 269.3h-124v-80.5z" />
      <path
        d="M478.6 269.3l-18-62.2a25.3 25.3 0 00-24.2-18.2h-81.6l123.8 80.4z"
        fill="#f2f2f2"
      />
      <path
        d="M32 68.6h266.7a32 32 0 0132 32v255.8H0V100.6a32 32 0 0132-32"
        fill="#ffd15c"
      />
      <path
        fill="#f2f2f2"
        d="M216.7 68.7v84.5l-12.3-12.4-13 13-13-13-13 13-12.9-13-13.1 13-13-13-12.5 12.6V68.7z"
      />
      <path
        d="M512 356.4v36.2H0v-36.2h53.5a73.2 73.2 0 01128 0h172a73 73 0 01127.8 0H512z"
        fill="#334a5e"
      />
      <path
        d="M468.4 392.3a51.1 51.1 0 11-102.2 0 51.1 51.1 0 01102.2 0"
        fill="#40596b"
      />
      <path
        d="M437.9 392.3a20.5 20.5 0 11-41 0 20.5 20.5 0 0141 0"
        fill="#acb3ba"
      />
      <path
        d="M168.5 392.3a51.1 51.1 0 11-102.2 0 51.1 51.1 0 01102.2 0"
        fill="#40596b"
      />
      <path
        d="M138 392.3a20.5 20.5 0 11-41 0 20.5 20.5 0 0141 0"
        fill="#acb3ba"
      />
    </svg>
  );
}

export default truck;
