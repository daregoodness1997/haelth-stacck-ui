import React, { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

const Select: React.FC<SelectProps> = ({ label, ...props }) => {
  return (
    <div>
      <select {...props}></select>
    </div>
  );
};

export default Select;
