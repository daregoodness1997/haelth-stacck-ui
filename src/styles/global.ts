import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { PageText as NavText } from '../helper/PageText';
import { ItemWrapper as NavItemWrapper } from '../helper/ItemWrapper';
import { CardWrapper as StatWrapper } from '../helper/CardWrapper';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    font-family: 'Open Sans', sans-serif; 
}
#root{
    margin:0 auto;
}



`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
`;

export const Text = styled(NavText)`
  color: ${props => (props.color ? props.color : '#ffffff')};
  font-size: ${props => (props.fontSize ? props.fontSize : '.9em')};
  margin-right: 1em;
  border: 1px solid #232f3e;
  padding: 0.5em 0.1em;
  cursor: pointer;

  &:hover {
    border: 1px solid #ffffff;
    border-radius: 0.2em;
  }
  @media (max-width: 850px) {
    display: none;
  }
`;
export const LeftText = styled(Text)`
  @media (max-width: 850px) {
    display: block;
  }
`;

export const Wrapper = styled(NavItemWrapper)`
  display: flex;
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : 'column'};
  align-items: ${props => (props.alignItems ? props.alignItems : 'flex-start')};
  padding: 0.1em;
  cursor: pointer;
  border: 1px solid #131a22;

  &:hover {
    border: 1px solid #ffffff;
    border-radius: 0.2em;
  }
  @media (max-width: 850px) {
    display: none;
  }
`;

export const Stat = styled(StatWrapper)`
  padding: ${props => (props.padding ? props.padding : '30px')};
  display: flex;
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  background: ${({ theme }) => theme.background};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '15px')};
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.5s ease 0s;
  margin-bottom: ${props =>
    props.margingBottom ? props.margingBottom : '30px'};

  &::before {
    content: '';
    width: 100%;
    padding-top: 100%;
    border-radius: 50%;
    background-image: linear-gradient(
      to top right,
      var(--main-color),
      var(--second-color)
    );
    position: absolute;
    left: -50%;
    top: 0;
    transform: scale(0);
    transition: transform 0.8s ease 0s;
  }
  &:hover::before {
    transform: scale(3);
  }
`;
