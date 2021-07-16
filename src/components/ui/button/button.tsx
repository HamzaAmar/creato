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
  variant?: Variant;
}

type IStatus = 'idle' | 'success' | 'error' | 'loading';
type Size = 'fluid' | 'normal';
type Variant = 'contained' | 'text' | 'outline';

const button = ({
  children,
  icon,
  status = 'idle',
  type = 'button',
  size = 'normal',
  variant = 'contained'
}: Button) => {
  const root = cn(styles.root, {
    [styles.fluid]: size === 'fluid',
    [styles.contained]: variant === 'contained',
    [styles.text]: variant === 'text',
    [styles.outline]: variant === 'outline'
  });
  const labelOrLoading = status === 'loading' ? <Loading /> : icon;
  return (
    <button type={type} className={root}>
      <span className={styles.iconContainer}>{labelOrLoading}</span>
      {children}
    </button>
  );
};

export default button;
