export enum LangCode {
  En = 'en',
  Jp = 'jp',
  Kr = 'kr',
}

export type ContentsForPages = {
  index: {
    title: string
    greeting: string
  }
}

export type LocaleContents = {[langCode in LangCode]: ContentsForPages}

export type LocalePageProps = {
  contents: ContentsForPages
  currentLangCode: LangCode
}

export const localeContents: LocaleContents = {
  en: {
    index: {
      title: 'Rira Instutite of Technology',
      greeting: 'Welcome to Rira Institute of Technology!',
    },
  },
  jp: {
    index: {
      title: 'リラ工科大学',
      greeting: 'リラ工科大学へようこそ！',
    },
  },
  kr: {
    index: {
      title: '리라 공과대학',
      greeting: '리라 공과대학에 어서오세요!',
    },
  },
}
