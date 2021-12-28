import React, { SelectHTMLAttributes } from 'react';
import { SelectField } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: any[];
}

const Select: React.FC<SelectProps> = ({ label, options, ...props }) => {
  return (
    <div>
      <label>{label}</label>{' '}
      <SelectField {...props}>
        {options.map(option => (
          <option className='form__option'>{option}</option>
        ))}
      </SelectField>
    </div>
  );
};

export default Select;
