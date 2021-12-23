import styled from 'styled-components';
import BaseButton from '.';

export const CustomButton = styled(BaseButton)`
  width: ${props => (props.fullwidth ? '100%' : 'auto')};
  color: ${({ theme }) => theme.btnText};
  background: ${({ theme }) => theme.primary};
  padding: 1rem;
  border: 0;
  border-radius: 4px;
`;
