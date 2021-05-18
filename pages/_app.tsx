import { FC } from 'react'
import 'normalize.css'
import '../styles/globals.css'
import Head from 'next/head'
type App = {
  Component: FC<any>;
  pageProps: any[];
};

export default function MyApp({ Component, pageProps }: App) {
  return (

    <>

      <Head>
        <meta name="title" content="Erick Arita Desarrollador frontend" />
        <meta
          name="description"
          content="🚀 Erick Marley Arita portafilo desarrollador frontend 🚀 "
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://erick-arita.vercel.app/" />
        <meta property="og:title" content="Erick Arita Desarrollador frontend" />
        <meta property="og:description" content="🚀 Erick Marley Arita desarrollador frontend con reactjs y nextjs dessarrollador web de honduras 🚀" />
        <meta property="og:image" content="/page.png" />
    <title>Erick Arita FrontEnd</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}