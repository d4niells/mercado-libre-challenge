import styled, { css } from 'styled-components';

import theme from 'styles/theme';

export const sizes = {
  sm: {
    h1: theme.font.sizes.xlarge,
    span: theme.font.sizes.large,
    paddingTop: '0.1rem'
  },
  md: {
    h1: theme.font.sizes.xxlarge,
    span: theme.font.sizes.large,
    paddingTop: '0.1rem'
  },
  lg: {
    h1: theme.font.sizes.xxxlarge,
    span: theme.font.sizes.xxlarge,
    paddingTop: '0.34rem'
  }
};

export const Price = styled.h1<{ size: keyof typeof sizes }>`
  ${({ theme, size }) => css`
    display: flex;
    align-items: flex-start;
    justify-items: flex-start;

    padding: ${theme.spacings.large} 0;
    font-size: ${sizes[size].h1};
    font-weight: 400;

    span {
      font-size: ${sizes[size].span};
      padding-top: ${sizes[size].paddingTop};
      margin-left: 0.3rem;
    }
  `}
`;
