import * as React from 'react';

function accessibility(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height={512} width={512} {...props}>
      <path d="M221 512c-51 0-100-22-134-60a8 8 0 0111-10 167 167 0 00257-13 16 16 0 00-4-22 16 16 0 00-22 3 135 135 0 11-168-200c7-3 10-9 10-16-1-6-5-12-12-14-3-1-8 0-11 1a167 167 0 00-68 238 8 8 0 11-12 8 180 180 0 0173-259 31 31 0 0142 14 31 31 0 01-15 41 120 120 0 00-67 108 120 120 0 00216 70 31 31 0 0143-6 31 31 0 017 43 183 183 0 01-146 74zm32-416a48 48 0 110-96 48 48 0 010 96zm0-81a33 33 0 100 66 33 33 0 000-66z" />
      <path d="M440 366c-3 0-6-2-7-5l-16-40c-4-12-16-20-28-20h-98c-4 0-7-4-7-8v-71c0-4 3-8 7-8h91a16 16 0 000-31h-91c-4 0-7-4-7-8v-15a31 31 0 00-62 0v81a8 8 0 11-15 0v-81a46 46 0 0192 0v8h83a31 31 0 010 61h-83v57h90c19 0 36 12 42 29l16 41a8 8 0 01-7 10z" />
      <path d="M442 462a31 31 0 01-29-20l-28-75c-5-12-16-20-29-20H253c-25 0-46-20-46-45v-31a8 8 0 1115 0v31c0 16 14 30 31 30h103c19 0 36 12 43 30l28 74a16 16 0 0029-11l-13-35a8 8 0 0114-6l14 36a31 31 0 01-19 40l-10 2z" />
    </svg>
  );
}

export default accessibility;