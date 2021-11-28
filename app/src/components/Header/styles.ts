import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100vw;
    padding: ${theme.spacings.medium} 0;
    background-color: ${theme.colors.primary};

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${theme.breakpoints.desktop}) {
      padding: ${theme.spacings.medium};
    }
  `}
`;

export const wrapper = styled.div`
  max-width: ${({ theme }) => theme.grid.container};
  width: ${({ theme }) => theme.grid.container};
  height: auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 3.5rem;
  margin-right: ${({ theme }) => theme.spacings.large};
`;
