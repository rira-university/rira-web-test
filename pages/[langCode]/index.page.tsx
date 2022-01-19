import Head from 'next/head'
import {css} from '@emotion/react'
import Navbar from '../navbar'
import Department from './sections/department'
import TeachingAssistant from './sections/teaching-assistant'
import Roadmap from './sections/roadmap'
import Introduction from './sections/introduction'
import Link from './sections/link'
import Cover from './sections/cover'
import {LangCode, LocalePageProps, localeContents} from '../../lib/locales'

export default function IndexPage({
  contents,
  currentLangCode,
}: LocalePageProps) {
  return (
    <>
      <Head>
        <title>{contents.index.title}</title>
      </Head>

      <main
        css={css`
          overflow: hidden;
        `}
      >
        <Cover />
        <Introduction />
        <Link />
        <Department />
        <TeachingAssistant />
        <Roadmap />
      </main>
    </>
  )
}

export async function getStaticPaths() {
  const paths = Object.values(LangCode).map((langCode: LangCode) => {
    return {
      params: {
        langCode: langCode,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params}: {params: {langCode: LangCode}}) {
  return {
    props: {
      contents: localeContents[params.langCode] || localeContents[LangCode.En],
      currentLangCode: params.langCode,
    },
  }
}
