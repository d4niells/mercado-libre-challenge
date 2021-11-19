import { InputHTMLAttributes, ChangeEvent } from 'react';

import * as S from './styles';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  value: string | number;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
};

const Input = ({ value, onChange, ...rest }: Props) => {
  return <S.Input {...rest} value={value} onChange={onChange} />;
};

export default Input;
