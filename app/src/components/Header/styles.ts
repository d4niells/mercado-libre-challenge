import styled from 'styled-components';

export const Header = styled.header`
  width: 100vw;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const wrapper = styled.div`
  max-width: ${({ theme }) => theme.grid.container.large};
  width: ${({ theme }) => theme.grid.container.medium};
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
