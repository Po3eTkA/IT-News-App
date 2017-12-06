import styled from 'styled-components';
import { blue, white } from '../../theme/variables';

const NotFoundPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  font-size: 5rem;
  color: ${white};
  background: url('${require('../../components/Header/header-bg.jpg')}') no-repeat center bottom;
  background-size: cover;

  a:hover {
    text-decoration: none;
    background-color: ${blue};
  }

  p {
    margin-top: 0;
    margin-bottom: 1.8rem;
    font-size: 4rem;
    opacity: .6;

    @media (max-width: 480px) {
      font-size: 3rem;
    }
  }

  h1 {
    margin: 0;
    font-size: 14rem;
    opacity: .6;

    @media (max-width: 480px) {
      font-size: 10rem;
    }
  }
`;

export default NotFoundPageWrapper;
