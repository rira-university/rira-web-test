import Head from 'next/head'
import {css} from '@emotion/react'
import Department from '../../components/sections/department'
import TeachingAssistant from '../../components/sections/teaching-assistant'
import Roadmap from '../../components/sections/roadmap'
import Introduction from '../../components/sections/introduction'
import Link from '../../components/sections/link'
import Cover from '../../components/sections/cover'
import {LangCode, LocalePageProps, localeContents} from '../../lib/locales'

export default function Index({contents}: LocalePageProps) {
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
