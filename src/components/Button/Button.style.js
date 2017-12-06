import styled, { css } from 'styled-components';
import { blue, red, white } from '../../theme/variables';

const StyledButton = styled.button`
  box-sizing: border-box;
  display: inline-block;
  margin-left: ${({ marginLeft }) => (marginLeft === true ? '1.4rem' : 'none')};
  padding: .5rem 1.5rem;
  font-size: 1.4rem;
  color: ${blue};
  border: none;
  border: 1px solid ${blue};
  background-color: transparent;
  border-radius: ${({ round }) => (round === true ? '1rem' : 'none')};
  outline: none;
  cursor: pointer;
  transition: all .3s;
  ${({ activeSortKey }) => typeof activeSortKey === 'string' && css`
    color: ${white};
    background-color: ${blue};
  `}
  ${({ marginBottom }) => marginBottom === true && css`
    @media (max-width: 480px) {
      margin-bottom: 1rem;
    }
  `}
  ${({ mediaQuery }) => mediaQuery === true && css`
  @media (max-width: 768px) {
    margin-left: 85%;
  }

  @media (max-width: 480px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2.5rem;
  }
`}

  &:active,
  &:hover {
    color: ${white};
    background-color: ${blue};
  }

  ${({ remove }) => remove === true && css`
    &:hover {
      background-color: ${red};
      border-color: transparent;
    }
  
    &:active {
      background-color: ${red};
      border-color: transparent;
    }
  `}
`;

export default StyledButton;

