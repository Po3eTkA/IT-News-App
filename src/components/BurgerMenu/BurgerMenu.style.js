import styled, { css } from 'styled-components';
import { black, blue, lightGray, white } from '../../theme/variables';


const HamburgerMenu = styled.a`
  display: none;
  cursor: pointer;
  position: absolute;
  z-index: 100;
  top: 1rem;
  right: 1rem;
  width: 3rem;
  height: 2px;
  font-size: 0;
  background: ${white};
  transition: all .3s;

  &:hover {
    background-color: ${blue};
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 3rem;
    height: 2px;
    background: ${white};
    top: -11px;
    transition: all .3s;
  }

  &::after {
    top: 11px;
  }

  &:hover::before,
  &:hover::after {
    background-color: ${blue};
  }

  &:active,
  &:active::before,
  &:active::after {
    background-color: ${blue};
  }

  ${({ opened }) => opened && css`
    background: transparent;

    &:hover {
      background: transparent;
    }

    &:active {
      background: transparent;
    }

    &::after {
      transform: ${({ fixed }) => (fixed ? 'rotate(45deg) translate(2px,-10px)' : 'rotate(45deg) translate(0, -12px)')};
      background-color: ${blue};
    }

    &::before {
      transform: rotate(-45deg) translate(-4px, 16px);
      background-color: ${blue};
    }
  `};
  ${({ fixed }) => fixed && css`
    position: fixed;
    top: 2rem;
    background: ${({ opened }) => (opened ? 'transparent' : '#000')};

    &::before,
    &::after {
      position: fixed;
      background: ${({ opened }) => (opened ? '#fff' : '#000')};
    }

    &::before {
      top: 13px;
    }

    &::after {
      top: 33px;
    }
  `};

  @media (max-width: 768px) {
    & {
      top: 2.3rem;
      display: flex;
      justify-content: flex-start;
      ${({ opened }) => opened && css`
        position: fixed;
      `};
    }
  }

  @media (min-width: 769px) {
    & {
      display: none;
    }
  }
`;

export default HamburgerMenu;
