import type {ReactElement, ReactNode} from 'react'
import type {NextPage} from 'next'
import type {AppProps} from 'next/app'
import Head from '@/pages/head'
import Navbar from '@/pages/navbar'
import Footer from '@/pages/footer'
import '@/styles/global.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({Component, pageProps}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <Head {...pageProps} />
      <Navbar {...pageProps} />
      <Component {...pageProps} />
      <Footer />
    </>,
  )
}
