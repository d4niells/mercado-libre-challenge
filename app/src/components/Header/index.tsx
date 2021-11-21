import React, { PropsWithChildren } from 'react';
import Link from 'next/link';

import * as S from './styles';

const Header = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <S.Header>
      <S.wrapper>
        <Link replace href="/">
          <S.Logo
            src="/img/logo_ml@2x.png"
            alt="Imagem de duas mãos se comprimentando com um aperto de mãos."
          />
        </Link>
        {children}
      </S.wrapper>
    </S.Header>
  );
};

export default Header;
