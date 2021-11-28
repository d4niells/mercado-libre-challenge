import styled, { css } from 'styled-components';

import ButtonBase from 'components/Common/Button';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-areas: 'main main' 'description .';
    padding: ${theme.spacings.large};

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme
        .breakpoints.tablet}) {
      display: flex;
      flex-direction: column;
      padding: ${theme.spacings.medium};
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    grid-area: main;
    display: flex;
    flex-direction: row;

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme
        .breakpoints.tablet}) {
      display: flex;
      flex-direction: column;
    }
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    max-width: 680px;
    flex: 2;
    height: 460px;
    object-fit: contain;

    @media (min-width: ${theme.breakpoints.mobile}) {
      width: 100%;
      height: auto;
    }

    @media (min-width: ${theme.breakpoints.tablet}) {
      width: 60%;
      height: auto;
      margin-right: ${theme.spacings.large};
    }
  `}
`;

export const PaymentInfo = styled.div`
  ${({ theme }) => css`
    flex: 1;
    grid-area: payment;

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

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme
        .breakpoints.laptop}) {
      margin-top: ${theme.spacings.large};

      h1 {
        font-size: ${({ theme }) => theme.font.sizes.xxlarge};

        span {
          font-size: ${({ theme }) => theme.font.sizes.large};
        }
      }

      h2 {
        font-size: ${theme.font.sizes.large};
        font-weight: 600;
      }
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
  grid-area: description;

  ${({ theme }) => css`
    h1 {
      margin: ${theme.spacings.large} 0;
      font-size: ${theme.font.sizes.xxlarge};
      color: ${theme.colors.black};
      font-weight: 400;
    }

    p {
      overflow: auto;
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.grey};
    }
  `}
`;
