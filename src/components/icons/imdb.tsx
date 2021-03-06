import * as React from 'react';

function Imdb(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M436.7 26H75.3C48 26 26 48 26 75.3v361.4C26 464 48 486 75.3 486h361.4c27.2 0 49.3-22 49.3-49.3V75.3C486 48 464 26 436.7 26z"
        fill="#fbbf14"
      />
      <path
        fill="#273238"
        d="M91.7 190.3h33.9v131.2H91.7zm150.1 131.2h-29.4v-88.7l-12 88.7h-21.1l-12.5-86.8v86.8H137V190.3h44c3.3 20.3 6.1 41 8.9 61.5l7.8-61.5h44.1v131.2zm88.7-84.7c0-8.3.4-17.3-1.4-25-4.4-23.2-32.2-21.5-50.3-21.5h-25.3v131.2c88.4.1 77 6.2 77-84.7zm-43 62v-86c12.2 0 10.6 6.4 10.6 16.4v50.6c0 10 2 19.2-10.6 19zM396 223.7c-9.2 0-15.3 2.7-21.5 9.4v-42.8h-32.6v131.2h30.6l2-8.3c5.8 7 12.2 10 21.4 10 20.4 0 22.8-15.6 22.8-31.7v-37c0-17.7-.8-30.8-22.8-30.8zm-16.5 80.7c-1.6 0-3-.9-3.9-2.5-2.2-5.2-1.1-45.3-1.1-45.9 0-3.9-1.1-13 5-13 7.5 0 6.4 7.5 6.4 13v33.6c0 5.5 1.6 14.8-6.4 14.8z"
      />
    </svg>
  );
}

export default Imdb;
