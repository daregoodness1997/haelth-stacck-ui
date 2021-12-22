import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  fullwidth?: boolean;
  showicon: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  fullwidth,
  showicon,
  ...props
}) => {
  return <button {...props}>{label}</button>;
};

export default Button;
