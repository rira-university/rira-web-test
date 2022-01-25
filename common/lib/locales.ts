export enum SiteLanguage {
  En = 'en',
  Jp = 'jp',
  Kr = 'kr',
}

export const langCodeForSiteLanguage: {[siteLang in SiteLanguage]: string} = {
  [SiteLanguage.En]: 'en' as const,
  [SiteLanguage.Jp]: 'ja' as const,
  [SiteLanguage.Kr]: 'ko' as const,
}

export type LocalePageProps = {
  currentSiteLang: SiteLanguage
}
