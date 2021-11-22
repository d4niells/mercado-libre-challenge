import styled, { css } from 'styled-components';

export const Card = styled.li`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

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

export const Price = styled.h1`
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  font-weight: 400;
`;

export const Title = styled.p`
  margin-top: ${({ theme }) => theme.spacings.large};
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: 400;
`;
