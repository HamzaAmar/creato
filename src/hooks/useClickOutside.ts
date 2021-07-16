import React, { useRef, useEffect, MouseEvent } from 'react';

interface ClickOutsideProps {
  active: boolean;
  onClick: (e?: MouseEvent) => void;
}

function hasParent(element: HTMLElement, root: HTMLElement | null) {
  return root && root.contains(element) && Boolean(element.closest('body'));
}

const useClickOutside = ({ active = true, onClick }: ClickOutsideProps) => {
  const ref = useRef<HTMLElement | null>(null);

  const handleClick = (event: any) => {
    if (!hasParent(event.target, ref.current!)) {
      if (typeof onClick === 'function') {
        onClick(event);
      }
    }
  };

  useEffect(() => {
    if (active) {
      document.addEventListener('mousedown', handleClick);
      document.addEventListener('touchstart', handleClick);
    }

    return () => {
      if (active) {
        document.removeEventListener('mousedown', handleClick);
        document.removeEventListener('touchstart', handleClick);
      }
    };
  });

  return ref;
};

export default useClickOutside;
