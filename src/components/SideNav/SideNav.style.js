import styled from 'styled-components';
import { black, blue, lightGray, white } from '../../theme/variables';

const SideNavList = styled.ul`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: ${({ opened }) => (opened ? '100%' : '0')};
  margin: 0;
  padding: 0;
  background-color: rgba(0, 0, 0, .8);
  opacity: .8;
  overflow-x: hidden;
  transition: all .5s;

  li {
    width: 100%;
    font-size: 3.5rem;
    line-height: 6.5rem;
    text-align: center;
  }

  a {
    display: block;
    color: ${white};

    &:hover {
      color: ${black};
      text-decoration: none;
      background-color: ${blue};
    }

    &:active {
      text-decoration: none;
      color: ${lightGray};
    }
  }

  @media (min-width: 769px) {
    & {
      display: none;
    }
  }
`;

// overflow-x: hidden;  Disable horizontal scroll */

export default SideNavList;

