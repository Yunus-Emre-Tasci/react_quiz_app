import type { AppProps } from 'next/app'
import "../styles/global.css";
import { GlobalStyle } from '@/styles/page.stylesdeneme2';
import UserAnswersProvider from '@/context/UserAnswersProviderdeneme2';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserAnswersProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </UserAnswersProvider>
  );
}
