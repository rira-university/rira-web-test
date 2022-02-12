import {css} from '@emotion/react'
import Cover from './_sections/cover'
import Introduction from './_sections/introduction'
import Activity from './_sections/activity'
import Department from './_sections/department'
import TeachingAssistant from './_sections/teaching-assistant'
import Roadmap from './_sections/roadmap'
import Partners from '@/pages/[siteLang]/_sections/partners'
import {LocalePageProps, SiteLanguage} from '@/common/lib/locales'
import Navbar from '@/pages/navbar'

export default function IndexPage(localePageProps: LocalePageProps) {
  const {currentSiteLang} = localePageProps

  return (
    <>
      <Navbar
        currentSiteLang={currentSiteLang}
        itemList={[
          <a key='activity' href='#activity'>
            Activity
          </a>,
          <a key='department' href='#department'>
            Dept
          </a>,
          <a key='teaching-assistant' href='#teaching-assistant'>
            Assistant
          </a>,
          <a key='roadmap' href='#roadmap'>
            Roadmap
          </a>,
          <a key='footer' href='#footer'>
            Channel
          </a>,
        ]}
      />
      <main
        css={css`
          overflow: hidden;
          ${currentSiteLang === SiteLanguage.Kr && 'word-break: keep-all'}
        `}
      >
        <Cover {...localePageProps} />
        <Introduction {...localePageProps} />
        <Activity />
        <Department {...localePageProps} />
        <TeachingAssistant {...localePageProps} />
        <Roadmap {...localePageProps} />
        <Partners />
      </main>
    </>
  )
}

export async function getStaticPaths() {
  const paths = Object.values(SiteLanguage).map((siteLang: SiteLanguage) => {
    return {
      params: {
        siteLang: siteLang,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({
  params,
}: {
  params: {siteLang: SiteLanguage}
}) {
  return {
    props: {
      currentSiteLang: params.siteLang,
    },
  }
}
