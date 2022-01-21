import Head from 'next/head'
import {LangCode, LocalePageProps} from '../common/lib/locales'
import contents from './head.json'

export default function MyHead({currentLangCode}: LocalePageProps) {
  const content = contents[currentLangCode || LangCode.En]

  return (
    <Head>
      <link rel='icon' href='/favicon.ico' />
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title>{content.title}</title>
      <meta name='description' content={content.description} />
      <meta name='keywords' content={content.keywords.join(', ')} />
      <link
        rel='alternate'
        hrefLang='x-default'
        href='https://rira.university/en'
      />
    </Head>
  )
}
