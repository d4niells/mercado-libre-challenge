import Head from 'next/head';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Mercado Livre</title>
        <link rel="shortcut icon" href="/img/Logo_ML.png" />
        <link rel="apple-touch-icon" href="/img/Logo_ML.png" />
        <meta name="description" content="Mercado Livre front-end challenge" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
