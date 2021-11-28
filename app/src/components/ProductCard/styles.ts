import styled, { css } from 'styled-components';

export const Card = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    cursor: pointer;
    padding: ${theme.spacings.medium};
    border-bottom: solid 1px ${theme.colors.lightGrey};

    @media (min-width: ${theme.breakpoints.mobile}) and (max-width: ${theme
        .breakpoints.tablet}) {
      width: 100%;

      & > img {
        min-width: 120px;
        width: 120px;
        height: 120px;
        object-fit: contain;
      }

      h1 {
        font-size: ${theme.font.sizes.large};
      }

      h1 > span {
        padding-top: 0;
        font-size: ${theme.font.sizes.medium};
      }

      p {
        font-size: ${theme.font.sizes.medium};
      }
    }

    @media (min-width: ${theme.breakpoints.tablet}) and (max-width: ${theme
        .breakpoints.laptop}) {
      width: 100%;
    }
  `}
`;

export const Image = styled.img`
  width: 180px;
  height: 180px;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.border.radius.medium};
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.medium};
  `}
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: 400;

    figure {
      margin-left: ${({ theme }) => theme.spacings.medium};
    }
  `}
`;

export const Title = styled.p`
  margin-top: ${({ theme }) => theme.spacings.large};
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: 400;
`;
