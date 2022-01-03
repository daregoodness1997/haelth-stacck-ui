import { Stack } from '@mui/material';
import React, { useContext, useState, useEffect } from 'react';
import Input from '../../components/inputs/basic/Input';
import PasswordInput from '../../components/inputs/basic/Password';

import { AppContext } from '../../context';
import AuthWrapper from '../../helper/AuthWrapper';
const loginData = [
  {
    type: 'email',
    label: 'E-mail',
    name: 'email',
    errorName: 'email',
  },
  {
    type: 'password',
    label: 'Password',
    name: 'password',
    errorName: 'password',
  },
];

const Login = () => {
  const { isLoggedIn } = useContext(AppContext);
  const [loaderTimer, setLoaderTimer] = useState(true);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.title = 'Health Stack - EMR';
    setTimeout(() => setLoaderTimer(false), 2500);
  }, []);

  console.log(isLoggedIn);
  return (
    <>
      <AuthWrapper paragraph='Login here as an organization'>
        <form action=''>
          <Input label='Email' placeholder='Enter your email' />
          <PasswordInput />
        </form>
      </AuthWrapper>
    </>
  );
};

export default Login;
