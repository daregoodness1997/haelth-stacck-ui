import { Stack } from '@mui/material';
import React from 'react';
import Button from '../../../components/buttons/Button';
import Input from '../../../components/inputs/basic/Input';

const ExistingAdminEmployee = () => {
  return (
    <Stack spacing={3} sx={{ width: '100%' }}>
      <form action=''>
        <Input label='Organization Email' />

        <Button type='submit' label='Send Invitation' fullwidth />
      </form>
    </Stack>
  );
};

export default ExistingAdminEmployee;
