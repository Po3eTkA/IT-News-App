import styled, { css } from 'styled-components';
import { blue, lightGray, white } from '../../theme/variables';

const Nav = styled.nav`
  position: ${({ fixed }) => (fixed ? 'fixed' : 'absolute')};
  top: 0;
  right: 0;
  width: 100%;
  background-color: ${({ fixed }) => (fixed ? 'rgba(0, 0, 0, 0.8)' : 'transparent')};
  transition: all .5s;

  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 2rem 0;
    margin: 0;
    margin-left: 10rem;
  }

  li {
    margin-right: 5rem;

    &:last-child {
      margin-right: 0;
    }
  }

  a {
    color: ${white};
    font-size: 2rem;

    &:hover {
      text-decoration: none;
      color: ${blue};
    }

    &:active {
      color: ${blue};
    }
  }

  @media (max-width: 768px) {
    & {
      display: none;
    }
  }
`;
export default Nav;
