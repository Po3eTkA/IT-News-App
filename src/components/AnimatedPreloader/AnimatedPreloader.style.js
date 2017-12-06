import styled, { keyframes } from 'styled-components';
import { green, purple, rose, yellow, white } from '../../theme/variables';

const animate = keyframes`
  0%,
  40%,
  100% {
    transform: scale(.2);
  }

  20% {
    transform: scale(1);
  }
`;

const Preloader = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  height: 30px;
  margin-top: -40px;
  padding-right: 29px;
  padding-left: 29px;

  li {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    background-color: ${white};
    border-radius: 50%;
    animation: ${animate} 1.8s ease-in-out infinite;
  }

  li:nth-child(1) {
    animation-delay: .5s;
    background-color: ${yellow};
    box-shadow: 0 0 2rem ${yellow};
  }

  li:nth-child(2) {
    animation-delay: .8s;
    background-color: ${rose};
    box-shadow: 0 0 2rem ${rose};
  }

  li:nth-child(3) {
    animation-delay: 1s;
    background-color: ${purple};
    box-shadow: 0 0 2rem ${purple};
  }

  li:nth-child(4) {
    animation-delay: 1.2s;
    background-color: ${green};
    box-shadow: 0 0 2rem ${green};
  }
`;

export default Preloader;
