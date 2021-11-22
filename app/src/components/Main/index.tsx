import { PropsWithChildren } from 'react';

import * as S from './styles';

const Main = ({ children }: PropsWithChildren<unknown>) => {
  return <S.Main>{children}</S.Main>;
};

export default Main;
