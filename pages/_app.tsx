import { FC } from 'react'
import 'normalize.css'
import '../styles/globals.css'
type Component = {
  Component: FC<any>
  pageProps: any[]
}

export default function MyApp({ Component, pageProps }: Component) {
  return (
    <Component {...pageProps} />
  )
}