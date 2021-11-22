import styled, { css } from 'styled-components';

export const Main = styled.main`
  ${({ theme }) => css`
    max-width: ${theme.grid.container.large};
    width: ${theme.grid.container.medium};
    background-color: ${theme.colors.white};
  `}
`;
