/* eslint-disable @next/next/google-font-display,@next/next/no-page-custom-font */
import Head from 'next/head'
import {LocalePageProps, SiteLanguage} from '../../common/lib/locales'

export default function Font({currentSiteLang}: LocalePageProps) {
  return (
    <Head>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
        crossOrigin='anonymous'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&family=Baloo+Da+2:wght@400;700&display=block'
        rel='stylesheet'
      />
      {currentSiteLang === SiteLanguage.Jp && (
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=block'
          rel='stylesheet'
        />
      )}
    </Head>
  )
}
