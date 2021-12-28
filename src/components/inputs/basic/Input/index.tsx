import React, { InputHTMLAttributes } from 'react';
import { InputFiled } from './styles';

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
      <InputFiled {...props} />
    </div>
  );
};

export default Input;
