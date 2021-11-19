import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';
import GlobalStyles from 'styles/global';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Mercado Livre</title>
        <link rel="shortcut icon" href="/img/logo_ml.png" />
        <link rel="apple-touch-icon" href="/img/logo_ml.png" />
        <meta name="description" content="Mercado Livre front-end challenge" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
