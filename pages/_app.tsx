import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Preloader from '../components/Preloader';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    // setTimeout(() => setLoading(true), 6000);
  }, []);

  return (
    <>
      {!loading ? (
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
      ) : (
        <Preloader />
      )}
    </>
  );
}
