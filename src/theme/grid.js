import styled, { css } from 'styled-components';
import media from './media';

// export const Div = styled.div`
//   ${({ marginBottom }) => marginBottom && css`
//     margin-bottom: ${marginBottom}
// `}
// `;

export const Container = styled.div`
  max-width: 980px;
  width: 95%;
  margin: 0 auto;
`;

// export const Relative = styled(Div)`
//   position: relative;
// `;

// export const Flex = styled(Div)`
//   display: flex;

//   ${({ column }) => column && css`
//     flex-direction: column;
// `}

//   ${({ justify }) => justify && css`
//     justify-content: ${justify};
//   `}

//   ${({ align }) => align && css`
//     align-content: ${align};
// `}

// ${({ justify }) => justify && css`
// justify-content: ${justify};
// `}
// `;