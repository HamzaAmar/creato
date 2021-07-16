import * as React from 'react';

function planing(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" {...props}>
      <path d="M60 6v32H4V6z" fill="#e6e9ed" />
      <path d="M26 24h12v10H26z" fill="#fcd770" />
      <path d="M8 24h12v10H8z" fill="#ff826e" />
      <path d="M26 10h12v10H26zm18 0h12v10H44z" fill="#b4dd7f" />
      <path d="M44 24h12v10H44z" fill="#ff826e" />
      <path d="M8 10h12v10H8z" fill="#fcd770" />
      <path
        d="M60 6H2V4c0-1.1.9-2 2-2h56a2 2 0 012 2v2zm0 32h2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2h2z"
        fill="#ccd1d9"
      />
      <path
        d="M30 49.4v6.2L25.8 61a2 2 0 01-2.7.9 2 2 0 01-.9-2.7zm11.8 9.7a2 2 0 01-3.6 1.8L34 55.6v-6.2z"
        fill="#d3a06c"
      />
      <path
        d="M34 55.6V60c0 .6-.2 1-.6 1.4a2 2 0 01-1.4.6 2 2 0 01-2-2V42h4v7.4z"
        fill="#cf9e76"
      />
      <path d="M63 7V4a3 3 0 00-3-3H4a3 3 0 00-3 3v3h2v30H1v3a3 3 0 003 3h25v6l-7.6 9.5v.2a3 3 0 001.3 4 3 3 0 004-1.2l2.3-3V60a3 3 0 006 0v-1.5l2.4 3a3 3 0 004 1.2 3 3 0 001.3-4L35 49v-6h25a3 3 0 003-3v-3h-2V7zM3 4c0-.6.4-1 1-1h56c.6 0 1 .4 1 1v1H3zm22 56.3l-.1.1a1 1 0 01-1.3.5 1 1 0 01-.5-1.3l5.9-7.4v3zm16-.7c.1.5 0 1-.6 1.3a1 1 0 01-1.3-.5L35 55.3v-3zm-8 .4a1 1 0 01-2 0V43h2zm28-20c0 .6-.4 1-1 1H4a1 1 0 01-1-1v-1h58zm-2-3H5V7h54z" />
      <path d="M21 9H7v12h14zm-2 10H9v-8h10zM39 9H25v12h14zm-2 10H27v-8h10zM57 9H43v12h14zm-2 10H45v-8h10zM21 35V23H7v12zM9 25h10v8H9zm30-2H25v12h14zm-2 10H27v-8h10zm20-10H43v12h14zm-2 10H45v-8h10z" />
    </svg>
  );
}

export default planing;
