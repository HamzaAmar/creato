import React from 'react';

export interface InputButton
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}
