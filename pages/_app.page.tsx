import type {ReactElement, ReactNode} from 'react'
import type {NextPage} from 'next'
import type {AppProps} from 'next/app'
import Head from 'next/head'
import '@/styles/global.css'
import Footer from '@/pages/footer'
import Partners from '@/pages/partners'
import Navbar from '@/pages/navbar'

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
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta charSet='UTF-8' />
        <meta name='keywords' content='titla, meta, nextjs' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Navbar {...pageProps} />
      <Component {...pageProps} />
      <Partners />
      <Footer />
    </>,
  )
}
