import type {ReactElement, ReactNode} from 'react'
import type {NextPage} from 'next'
import type {AppProps} from 'next/app'
import Meta from '@/pages/head/meta'
import Font from '@/pages/head/font'
import Footer from '@/pages/footer'
import {useRouter} from 'next/router'
import '@/styles/global.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({Component, pageProps}: AppPropsWithLayout) {
  const router = useRouter()
  const {pathname} = router

  const getLayout = Component.getLayout ?? ((page) => page)

  if (pathname === '/') {
    return getLayout(
      <>
        <>
          <Meta {...pageProps} />
        </>
        <Component {...pageProps} />
      </>,
    )
  } else {
    return getLayout(
      <>
        <>
          <Meta {...pageProps} />
          <Font {...pageProps} />
        </>
        <Component {...pageProps} />
        <Footer />
      </>,
    )
  }
}
