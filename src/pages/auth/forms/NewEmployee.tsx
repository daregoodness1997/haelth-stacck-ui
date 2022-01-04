import { Stack } from '@mui/material';
import React from 'react';
import Button from '../../../components/buttons/Button';
import Input from '../../../components/inputs/basic/Input';
import CustomSelect from '../../../components/inputs/basic/Select';
import {
  countriesOptions,
  departmentOptions,
  statesOptions,
  unitsOptions,
} from '../../../utils/data';

const NewEmployee = () => {
  return (
    <Stack spacing={3} sx={{ width: '100%' }}>
      <form action=''>
        <Input label='Organization Email' />
        <Input label='Email Address' type='email' />
        <Input label='Phone Number' type='tel' />
        <CustomSelect label='Country' options={countriesOptions} />
        <CustomSelect label='State' options={statesOptions} />
        <CustomSelect label='Department' options={departmentOptions} />
        <CustomSelect label='Unit' options={unitsOptions} />

        <Button type='submit' label='Create Admin' fullwidth />
      </form>
    </Stack>
  );
};

export default NewEmployee;
