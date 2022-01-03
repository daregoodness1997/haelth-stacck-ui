import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
`;

export const AuthContainer = styled.div`
  width: 65%;
  height: 100vh;
  padding-top: 12%;
  padding-bottom: 4%;
  background: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  overflow-y: auto;
  @media (max-width: 876px) {
    width: 100%;
  }

  & div {
    height: calc(100vh - 16%);
    padding: 0 1rem;
  }

  & h2 {
    margin-bottom: 10px;
  }
`;
