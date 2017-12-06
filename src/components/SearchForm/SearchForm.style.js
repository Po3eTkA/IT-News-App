import styled from 'styled-components';
import { white, gray } from '../../theme/variables';

export const Form = styled.form`
  position: relative;
  width: 82%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 12px 24px;
  font-size: 14px;
  line-height: 18px;
  color: ${white};
  background-color: transparent;
  outline: none;
  border-radius: 50px;
  border: 1px solid ${white};
  transition: all 250ms ease-in-out;
  backface-visibility: hidden;

  &::placeholder {
    color: ${gray};
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  &:focus,
  &:hover {
    padding: 12px 24px;
    outline: 0;
    border: 1px solid transparent;
    border-bottom: 1px solid ${white};
    border-radius: 0;
  }
`;

export const SearchInputButton = styled.button`
  position: absolute;
  right: 0;
  top: 10px;
  z-index: 100;
  display: inline-block;
  width: 40px;
  height: 24px;
  color: transparent;
  border: none;
  outline: none;
  mask: url('${require('./icons8-search.svg')}') no-repeat 0% 50%;
  background-size: 24px 24px;
  background-color: #fff;
  transition: all 250ms ease-in-out;
  cursor: pointer;
`;
