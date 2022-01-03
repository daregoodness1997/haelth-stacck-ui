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
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ width: '100%' }}>
        <InputLabel id='demo-simple-select-autowidth-label'>Age</InputLabel>
        <Select
          labelId='demo-simple-select-autowidth-label'
          id='demo-simple-select-autowidth'
          value={age}
          onChange={handleChange}
          autoWidth
          label='Age'
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          {options.map((option, index) => (
            <MenuItem value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomSelect;
