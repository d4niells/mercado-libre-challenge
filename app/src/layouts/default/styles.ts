import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  background-color: ${({ theme }) => theme.colors.mainBg};
`;

export const Main = styled.div`
  ${({ theme }) => css`
    width: ${theme.grid.container};
    min-height: 100%;

    @media (max-width: ${theme.breakpoints.desktop}) {
      width: 100%;
      padding: 0 ${theme.spacings.medium};
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      width: ${theme.grid.container};
      padding: 0;
    }
  `}
`;
