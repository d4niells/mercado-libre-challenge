import styled, { css } from 'styled-components';

import InputBase from 'components/Common/Input';
import ButtonBase from 'components/Common/Button';

export const Wrapper = styled.div`
  width: 100%;
  height: 39px;

  display: flex;
  justify-content: space-between;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius.medium};
    border: solid 1px ${theme.colors.lightGrey};
  `}
`;

export const Input = styled(InputBase)`
  ${({ theme }) => css`
    flex: 1;
    border: none;
    border-radius: ${theme.border.radius.medium};
    padding: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.medium};
  `}
`;

export const Button = styled(ButtonBase)`
  ${({ theme, disabled }) => css`
    padding: ${theme.spacings.medium};
    border-top-right-radius: ${theme.border.radius.medium};
    border-bottom-right-radius: ${theme.border.radius.medium};
    background-color: ${theme.colors.lightGrey};

    cursor: ${disabled ? 'not-allowed' : 'poiter'};
  `}
`;
