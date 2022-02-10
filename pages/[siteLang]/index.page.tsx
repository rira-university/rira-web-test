import Head from 'next/head'
import {css} from '@emotion/react'
import Cover from './sections/cover'
import Introduction from './sections/introduction'
import Activity from './sections/activity'
import Department from './sections/department'
import TeachingAssistant from './sections/teaching-assistant'
import Roadmap from './sections/roadmap'
import {
  langCodeForSiteLanguage,
  LocalePageProps,
  SiteLanguage,
} from '@/common/lib/locales'
import Partners from '@/pages/[siteLang]/sections/partners'
import {useEffect} from 'react'

export default function IndexPage(localePageProps: LocalePageProps) {
  const {currentSiteLang} = localePageProps

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault()
        const target = e.currentTarget as HTMLAnchorElement
        const targetSelector = target.getAttribute('href') || '#'
        document
          .querySelector(targetSelector === '#' ? 'body' : targetSelector)
          ?.scrollIntoView({
            behavior: 'smooth',
          })
      })
    })
  }, [])

  return (
    <>
      <Head>
        {Object.values(SiteLanguage).map((siteLang) => (
          <link
            key={langCodeForSiteLanguage[siteLang]}
            rel='alternate'
            hrefLang={langCodeForSiteLanguage[siteLang]}
            href={`https://rira.university/${siteLang}/`}
          />
        ))}
      </Head>

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
