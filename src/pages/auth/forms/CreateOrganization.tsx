import { Stack } from '@mui/material';
import React, { useState } from 'react';
import Input from '../../../components/inputs/basic/Input';
import CustomSelect from '../../../components/inputs/basic/Select';
import { createOrganizationData } from '../../../utils/data';

interface ValueProps {
  nameOfOrganzation: string;
}

const CreateOrganization = () => {
  const [values, setValues] = useState<ValueProps>({
    nameOfOrganzation: '',
  });
  return (
    <Stack spacing={3} sx={{ width: '100%' }}>
      {createOrganizationData.map((data, index) => {
        const { children, option, childrenContent, name } = data;

        if (!children) {
          if (!option) {
            return <Input {...data} name={name} key={index} />;
          }
        }

        <Stack direction='row' spacing={3} sx={{ width: '100%' }}>
          {childrenContent.map(child => {
            const { options, option, name, label } = child;

            if (!option) {
              return <Input name={name} key={index} />;
            } else {
              //   <CustomSelect name={name} key={index} options={options} />;
            }
          })}
        </Stack>;
      })}
    </Stack>
  );
};

export default CreateOrganization;
