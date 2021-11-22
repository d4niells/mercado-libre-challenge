import styled, { css } from 'styled-components';

import ButtonBase from 'components/Common/Button';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.large};
  `}
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 1;
  grid-template-areas: 'image payment';
`;

export const Image = styled.img`
  width: 680px;
  height: 460px;
  object-fit: contain;
  grid-area: image;
`;

export const PaymentInfo = styled.div`
  grid-area: payment;
  ${({ theme }) => css`
    h1 {
      font-size: ${({ theme }) => theme.font.sizes.xxxlarge};
      padding: ${({ theme }) => theme.spacings.large} 0;
      font-weight: 400;
    }

    h2 {
      font-size: ${theme.font.sizes.xlarge};
      font-weight: 600;
    }

    h3 {
      margin-bottom: ${theme.spacings.medium};
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.black};
      font-weight: 400;
    }
  `}
`;

export const Button = styled(ButtonBase)`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.medium};
    font-weight: 400;
    font-size: ${theme.font.sizes.medium};
    border-radius: ${theme.border.radius.medium};

    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    transition: background-color 0.2s ease-in;

    &:hover {
      background-color: ${theme.colors.secondaryDark};
    }
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    h1 {
      margin: ${theme.spacings.large} 0;
      font-size: ${theme.font.sizes.xxlarge};
      color: ${theme.colors.black};
      font-weight: 400;
    }

    p {
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.grey};
    }
  `}
`;
