import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: ${({ theme }) => theme.spacings.medium} 0;
`;

export const Title = styled.p<{ isBold: boolean }>`
  ${({ theme, isBold }) => css`
    font-size: ${theme.font.sizes.small};

    ${isBold
      ? css`
          color: ${theme.colors.darkGrey};
          font-weight: 600;
        `
      : css`
          color: ${theme.colors.grey};
          font-weight: 400;
        `}

    & > span {
      padding: 0 ${theme.spacings.small};
    }
  `}
`;
