import React, { useContext } from 'react';
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
      <Button>Login in</Button>
      <Button fullwidth={true}>Login in - Full</Button>
    </Container>
  );
};

export default Login;
