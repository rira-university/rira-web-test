import {css} from '@emotion/react'
import {LocalePageProps, SiteLanguage} from '../../../common/lib/locales'
import {
  notoSansJp,
  oneMobilePop,
  oneMobileRegular,
} from '../../../common/utils/font-loader'
import contents from './teaching-assistant.json'

const imgClipboardSvg = require('@/imgs/img-clipboard.svg?url')

export default function TeachingAssistant({currentSiteLang}: LocalePageProps) {
  const content = contents[currentSiteLang]

  return (
    <section
      id='teaching-assistant'
      css={css`
        background-color: #fff0d2;
        overflow: hidden;
        padding: 40px 0 80px;
        position: relative;

        @media (min-width: 900px) {
          padding: 100px 0 172px;
        }
      `}
    >
      <header
        css={css`
          align-items: center;
          display: flex;
          justify-content: center;
          position: relative;
          z-index: 1;
        `}
      >
        <h2
          css={css`
            color: #000;
            font-family: ${oneMobilePop}, sans-serif;
            font-size: 24px;
            letter-spacing: -0.75px;
            line-height: 1.25;
            margin-top: 10px;
            position: absolute;
            text-align: center;

            @media (min-width: 900px) {
              font-size: 60px;
              letter-spacing: -1.88px;
              line-height: 1.2;
              margin-top: 20px;
            }
          `}
        >
          Teaching Assistant
        </h2>
        <img
          src={require('@/imgs/img-header.svg')}
          alt=''
          css={css`
            width: 300px;

            @media (min-width: 900px) {
              width: 780px;
            }
          `}
        />
      </header>
      <div
        css={css`
          column-gap: 20px;
          display: flex;
          margin-top: 20px;
          overflow-x: auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;

          @media (min-width: 900px) {
            column-gap: 40px;
            flex: 50%;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 60px;
            padding: 0 calc(100% * 150 / 1440);
            row-gap: 28px;
          }

          > div {
            align-items: center;
            display: flex;
            flex-direction: column;
            height: 392px;
            min-width: 220px;
            padding: 60px 24px 40px;
            position: relative;
            width: 220px;

            @media (min-width: 900px) {
              height: 620px;
              padding: 72px 24px 52px;
              width: 348px;
            }

            > img:first-of-type {
              background-color: pink;
              border-color: pink;
              border-radius: 100%;
              height: 172px;
              width: 172px;

              @media (min-width: 900px) {
                height: 240px;
                width: 240px;
              }
            }

            > h3 {
              color: #1e1e1e;
              font-family: ${oneMobilePop}, sans-serif;
              font-size: 24px;
              letter-spacing: -0.75px;
              line-height: 1.25;
              margin-top: 20px;
              text-align: center;

              @media (min-width: 900px) {
                font-size: 40px;
                letter-spacing: -1.25px;
                line-height: 1.5;
              }
            }

            > p {
              color: #000;
              font-family: ${currentSiteLang === SiteLanguage.Jp
                  ? notoSansJp
                  : oneMobileRegular},
                sans-serif;
              font-size: 12px;
              font-weight: bold;
              letter-spacing: -0.38px;
              line-height: 1.67;
              margin-top: 10px;
              text-align: center;

              @media (min-width: 900px) {
                font-size: 24px;
                letter-spacing: -0.75px;
              }
            }

            > img:last-of-type {
              position: absolute;
              top: 0;
              width: 100%;
              z-index: -1;

              @media (min-width: 900px) {
              }
            }
          }
        `}
      >
        {[1, 2, 3, 4, 5, 6, 7].map((n, i) => {
          const imgTeamResponsive = require(`../../../public/imgs/img-team${n}.png?resize&sizes[]=240&sizes[]=480&sizes[]=720`)

          return (
            <div key={n} css={css``}>
              <img
                src={imgTeamResponsive.src}
                srcSet={imgTeamResponsive.srcSet}
                height={imgTeamResponsive.height}
                width={imgTeamResponsive.width}
                sizes='172px, (min-width: 900px) 240px'
                loading='lazy'
                alt=''
              />
              <h3>{content.team[i].name}</h3>
              <p>{content.team[i].description}</p>
              <img src={imgClipboardSvg} loading='lazy' alt='' css={css``} />
            </div>
          )
        })}
      </div>
      <img
        src={require('@/imgs/bg-section-05.svg')}
        loading='lazy'
        alt=''
        css={css`
          bottom: 0;
          object-fit: contain;
          position: absolute;
          width: 200%;

          @media (min-width: 900px) {
            width: 100%;
          }
        `}
      />
    </section>
  )
}
