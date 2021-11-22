import styled from 'styled-components';

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
  min-height: 100%;
`;
