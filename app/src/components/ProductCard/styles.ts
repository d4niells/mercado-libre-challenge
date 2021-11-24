import styled, { css } from 'styled-components';

export const Card = styled.li`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    cursor: pointer;
    border-bottom: solid 1px ${theme.colors.lightGrey};
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

export const PriceWrapper = styled.h1`
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
