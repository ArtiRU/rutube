import type { AppProps } from 'next/app';
import NextProgressBar from 'nextjs-progressbar';

import '@/assets/styles/global.scss';

import QueryProvider from '@/providers/QueryProvider';
import ReduxProvider from '@/providers/ReduxProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryProvider>
        <NextProgressBar
          color="#ff7652"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
        />
        <ReduxProvider>
          <Component {...pageProps} />
        </ReduxProvider>
      </QueryProvider>
    </>
  );
}
