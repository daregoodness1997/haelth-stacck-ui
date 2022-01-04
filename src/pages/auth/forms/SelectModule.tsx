import { Box, FormGroup, Stack } from '@mui/material';
import React from 'react';
import CheckboxInput from '../../../components/inputs/basic/Checkbox';
import { modules } from '../../../utils/data';

const SelectModule = () => {
  return (
    <Stack spacing={3} sx={{ width: '100%', mt: 4, mb: 4 }}>
      <form action=''>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <FormGroup>
            {modules.first.map((module, index) => (
              <CheckboxInput label={module} key={index} />
            ))}
          </FormGroup>
          <FormGroup>
            {modules.second.map((module, index) => (
              <CheckboxInput label={module} key={index} />
            ))}
          </FormGroup>
        </Box>
      </form>
    </Stack>
  );
};

export default SelectModule;
