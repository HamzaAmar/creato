import React, { EventHandler, useState } from 'react';

import styles from './textarea.module.css';
import { InputButton } from './textarea.interface';

const Input = ({
  name,
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
      <textarea
        className={styles.input}
        name={name}
        placeholder={placeholder}
        id={name}
        onChange={onChange}
        rows={10}
        {...rest}
      />
    </div>
  );
};

export default Input;
