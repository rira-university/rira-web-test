import {langCodeForSiteLanguage, SiteLanguage} from '@/common/lib/locales'
import {useEffect} from 'react'

export default function IndexPage() {
  useEffect(() => {
    const swap = ([a, b]: [any, any]) => [b, a]
    const siteLanguageForLangCode = Object.fromEntries(
      Object.entries(langCodeForSiteLanguage).map(swap),
    )

    const targetLangCode = navigator.languages
      .map((languageTag) => languageTag.substring(0, 2))
      .find((langCode) => siteLanguageForLangCode[langCode])

    window.location.href = targetLangCode
      ? siteLanguageForLangCode[targetLangCode]
      : SiteLanguage.En
  })

  return null
}
