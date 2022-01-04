import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React from 'react';

interface CheckboxProps {
  label: string;
}

const CheckboxInput: React.FC<CheckboxProps> = ({ label }) => {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label={label} />
    </FormGroup>
  );
};

export default CheckboxInput;
