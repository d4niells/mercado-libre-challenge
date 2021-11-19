import React, { PropsWithChildren } from 'react';

import * as S from './styles';

const Header = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <S.Header>
      <S.wrapper>
        <S.Logo
          src="/img/logo_ml@2x.png"
          alt="Imagem de duas mãos se comprimentando com um aperto de mãos."
        />
        {children}
      </S.wrapper>
    </S.Header>
  );
};

export default Header;
