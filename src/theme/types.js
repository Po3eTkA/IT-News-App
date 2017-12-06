import styled from 'styled-components';
import { blue, yellow } from './variables'; 
export const A = styled.a`
  color: ${blue};
  text-decoration: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    height: 10%;
    width: 100%;
    background-color: ${blue};
    transition: height .1s, background-color .1s;
  }

  &:hover {
    height: 40%;
    background-color: ${yellow};
  }
`;