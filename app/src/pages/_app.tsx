import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { SearchProvider } from 'contexts/search';
import { CategoryProvider } from 'contexts/category';

import theme from 'styles/theme';
import GlobalStyles from 'styles/global';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Mercado Livre</title>
        <link rel="shortcut icon" href="/img/logo_ml.png" />
        <link rel="apple-touch-icon" href="/img/logo_ml.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Mercado Livre front-end challenge" />
      </Head>
      <GlobalStyles />
      <SearchProvider>
        <CategoryProvider>
          <Component {...pageProps} />
        </CategoryProvider>
      </SearchProvider>
    </ThemeProvider>
  );
};

export default App;
