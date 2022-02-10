import Head from 'next/head'
import {LocalePageProps, SiteLanguage} from '@/common/lib/locales'
import contents from './meta.json'

export default function Meta({currentSiteLang}: LocalePageProps) {
  const content = contents[currentSiteLang || SiteLanguage.En]

  return (
    <Head>
      <link rel='icon' href={require('@/imgs/favicon.ico')} />
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title>{content.title}</title>
      <meta name='description' content={content.description} />
      <meta name='keywords' content={content.keywords.join(', ')} />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href={require('@/imgs/apple-touch-icon.png')}
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href={require('@/imgs/favicon-32x32.png')}
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href={require('@/imgs/favicon-16x16.png')}
      />

      <meta property='og:type' content='website' />
      <meta
        property='og:url'
        content={`https://rira.university/${
          currentSiteLang || SiteLanguage.En
        }/`}
      />
      <meta property='og:title' content={content.title} />
      <meta property='og:description' content={content.description} />
      <meta
        property='og:image'
        content='https://rira.university/imgs/meta-image.jpg'
      />

      <meta property='twitter:card' content='summary_large_image' />
      <meta
        property='twitter:url'
        content={`https://rira.university/${
          currentSiteLang || SiteLanguage.En
        }/`}
      />
      <meta property='twitter:title' content={content.title} />
      <meta property='twitter:description' content={content.description} />
      <meta
        property='twitter:image'
        content='https://rira.university/imgs/meta-image.jpg'
      />

      <link
        rel='alternate'
        hrefLang='x-default'
        href={`https://rira.university/${SiteLanguage.En}/`}
      />
    </Head>
  )
}
