import React, { SelectHTMLAttributes } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: any[];
}

const CustomSelect: React.FC<SelectProps> = ({ label, options, ...props }) => {
  return (
    <div>
      <FormControl sx={{ width: '100%', mt: 1, mb: 1 }}>
        <InputLabel id='demo-simple-select-autowidth-label'>{label}</InputLabel>
        <Select
          labelId='demo-simple-select-autowidth-label'
          id='demo-simple-select-autowidth'
          autoWidth
          label={label}
        >
          <MenuItem value='' sx={{ width: '100%' }}>
            <em>None</em>
          </MenuItem>
          {options.map((option, index) => (
            <MenuItem value={option} key={index} sx={{ width: '100%' }}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomSelect;
