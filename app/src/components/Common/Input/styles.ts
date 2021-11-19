import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};

    &::placeholder {
      color: ${theme.colors.grey};
    }
  `}
`;
