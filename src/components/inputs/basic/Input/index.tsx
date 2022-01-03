import React, { InputHTMLAttributes } from 'react';
import { FormControl, TextField } from '@mui/material';
import { InputField } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputId?: string;
  errors?: boolean;
  errorText?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  helperText?: string;
  name?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  inputId,
  errors,
  errorText,
  type = 'text',
  name,
  onChange,
  helperText,
}) => {
  return (
    <FormControl sx={{ width: '100%' }}>
      <TextField
        error={errors}
        helperText={helperText}
        id='component-simple'
        onChange={onChange}
        type={type}
        label={label}
      />
    </FormControl>
  );
};

export default Input;
