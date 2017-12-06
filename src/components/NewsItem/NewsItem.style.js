import styled from 'styled-components';
import { lightGray, gray } from '../../theme/variables';

const NewsListItem = styled.li`
  padding: 2rem;
  text-align: left;
  border-bottom: 1px solid ${lightGray};

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  h2 {
    margin-bottom: .7rem;

    @media (max-width: 480px) {
      font-size: 2.1rem;
    }
  }

  h2 > a {
    margin-bottom: .8rem;
    font-weight: 700;
  }

  h4 {
    display: inline-block;
    color: ${gray};
  }
`;

export default NewsListItem;
