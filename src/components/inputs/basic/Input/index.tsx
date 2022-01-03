import React, { InputHTMLAttributes } from 'react';
import { InputField } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputId?: string;
  error?: boolean;
  errorText?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  inputId,
  error,
  errorText,
  ...props
}) => {
  return (
    <div className='form-control'>
      <label>{label}</label>
      <InputField {...props} />
    </div>
  );
};

export default Input;
