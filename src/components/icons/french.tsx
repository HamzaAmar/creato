import * as React from 'react';

function french(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        d="M38.3 88.3A38.3 38.3 0 000 126.6v258.8a38.3 38.3 0 0038.3 38.3h132.4V88.3H38.3z"
        fill="#41479b"
      />
      <path fill="#f5f5f5" d="M170.7 88.3h170.7v335.4H170.7z" />
      <path
        d="M473.7 88.3H341.3v335.4h132.4a38.3 38.3 0 0038.3-38.3V126.6a38.3 38.3 0 00-38.3-38.3z"
        fill="#ff4b55"
      />
    </svg>
  );
}

export default french;
