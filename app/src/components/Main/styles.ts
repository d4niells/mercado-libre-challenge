import styled, { css } from 'styled-components';

export const Main = styled.main`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    width: ${theme.grid.container};
    background-color: ${theme.colors.white};
  `}
`;
