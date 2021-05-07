import { FC } from 'react'
import 'normalize.css'
import '../styles/globals.css'
type App = {
  Component: FC<any>;
  pageProps: any[];
};

export default function MyApp({ Component, pageProps }: App) {
  return (
    <Component {...pageProps} />
  )
}