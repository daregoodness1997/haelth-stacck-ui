import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  color?: string;
  fullwidth?: boolean;
  showicon?: boolean;
}

const BaseButton: React.FC<ButtonProps> = ({
  label,
  color,
  fullwidth,
  showicon,
  children,
  ...props
}) => {
  return (
    <button {...props}>
      {label}
      {children}
    </button>
  );
};

export default BaseButton;
