import Head from 'next/head'
import {css} from '@emotion/react'
import CoverSection from './sections/cover-section'
import IntroductionSection from './sections/introduction-section'
import SitemapSection from './sections/sitemap-section'
import DepartmentSection from './sections/department-section'
import TaSection from './sections/ta-section'
import RoadmapSection from './sections/roadmap-section'
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
        <CoverSection />
        <IntroductionSection />
        <SitemapSection />
        <DepartmentSection />
        <TaSection />
        <RoadmapSection />
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
