import React from 'react';

export interface InputButton
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
