import type { AppProps } from 'next/app'
import "../styles/global.css";
import { GlobalStyle } from '@/styles/page.stylesdeneme2';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
