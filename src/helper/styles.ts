import styled from 'styled-components';

export const Side = styled.div`
  width: 35%;
  height: 100vh;
  position: relative;
  background: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
`;
