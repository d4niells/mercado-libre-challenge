import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import * as S from './styles';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest }: PropsWithChildren<Props>) => {
  return <S.Button {...rest}>{children}</S.Button>;
};

export default Button;
