import React from 'react';

import { InputButton } from './input.interface';
import styles from './input.module.css';

const input = ({
  name,
  type = 'text',
  placeholder,
  label,
  onChange,
  ...rest
}: InputButton) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        name={name}
        placeholder={placeholder}
        id={name}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default input;
