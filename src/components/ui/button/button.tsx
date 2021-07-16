/* eslint-disable react/button-has-type */
import React, { ButtonHTMLAttributes } from 'react';
import { Loading } from '@components/ui';
import cn from 'classnames';

import styles from './button.module.css';

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  status?: IStatus;
  size?: Size;
}

type IStatus = 'idle' | 'success' | 'error' | 'loading';
type Size = 'fluid' | 'normal';

const button = ({
  children,
  icon,
  status = 'idle',
  type = 'button',
  size = 'normal'
}: Button) => {
  const labelOrLoading = status === 'loading' ? <Loading /> : icon;
  return (
    <button
      type={type}
      className={cn(styles.root, { [styles.fluid]: size === 'fluid' })}
    >
      <span className={styles.iconContainer}>{labelOrLoading}</span>
      {children}
    </button>
  );
};

export default button;
