import React, { InputHTMLAttributes } from 'react';

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
      <input {...props} />
    </div>
  );
};

export default Input;
