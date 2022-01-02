import React from 'react';
import { Side } from './styles';

interface AuthProps {}

const AuthSideWrapper: React.FC<AuthProps> = ({ children }) => {
  return (
    <Side>
      <img src='/hstack-backround.png' alt='' />
    </Side>
  );
};

export default AuthSideWrapper;
