import styled from 'styled-components';
import { white } from '../../theme/variables';

export const H1 = styled.h1`
  margin-bottom: 2rem;
  font-size: 5rem;
  text-align: center;
  color: ${white};

  @media (max-width: 560px) {
    font-size: 3.5rem;
  }
`;

export const MainHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  background: url('${require('./header-bg.jpg')}') no-repeat center bottom;
  background-size: cover;

  @media only screen and (max-width: 768px) {
    height: 350px;
  }

  @media only screen and (max-width: 480px) {
    height: 300px;
  }
`;
