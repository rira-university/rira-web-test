import Head from 'next/head'
import {LangCode} from '../common/lib/locales'

export default function IndexPage() {
  return (
    <Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const supportedLanguages = {en: '${LangCode.En}', ja: '${LangCode.Jp}', ko: '${LangCode.Kr}'}
            let matched = false // window.location has some delay, so it may cause wrong result.
        
            navigator.languages.forEach((tags) => {
              if (matched) {
                return
              }
        
              const langCode = tags.substring(0, 2)
              if (supportedLanguages[langCode]) {
                matched = true
                window.location = supportedLanguages[langCode]
              }
            })
        
            if (!matched) {
              window.location = '${LangCode.En}'
            }
          `,
        }}
      />
    </Head>
  )
}
