import React, { useContext, useState, useEffect } from 'react';
import Badge from '../../components/badge';
import Button from '../../components/buttons/Button';
import Preloader from '../../components/utilities/Preloader';
import { AppContext } from '../../context';
import { Container } from '../../styles/global';

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
  return <>{loaderTimer ? <Preloader /> : <Container>Login</Container>}</>;
};

export default Login;
