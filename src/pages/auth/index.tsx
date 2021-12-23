import React, { useContext } from 'react';
import Badge from '../../components/badge';
import Button from '../../components/buttons/Button';
import { AppContext } from '../../context';
import { Container } from '../../styles/global';

const Login = () => {
  const { isLoggedIn } = useContext(AppContext);
  console.log(isLoggedIn);
  return (
    <Container>
      <h1>Login</h1>
      <code> {isLoggedIn.toString()}</code>
      <Badge type='success' content='10' />
      <Button>Login in</Button>
      <Button fullwidth={true}>Login in - Full</Button>
    </Container>
  );
};

export default Login;
