import {css} from '@emotion/react'
import {LocalePageProps} from '../../../common/lib/locales'
import {baloo2} from '../../../common/utils/font-loader'
import Animator from '../../../common/utils/Animator'
import contents from './cover.json'

const imagePrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Cover({currentSiteLang}: LocalePageProps) {
  const content = contents[currentSiteLang]

  return (
    <section
      css={css`
        align-items: center;
        display: flex;
        flex-direction: column;
        padding: 50px 15px 0;
        position: relative;
        z-index: 0;

        @media (min-width: 900px) {
          padding-top: 92px;
        }
      `}
    >
      <Animator threshold={0}>
        <h1
          css={css`
            color: #000;
            font-family: ${baloo2}, sans-serif;
            font-size: 20px;
            font-weight: bold;
            letter-spacing: -0.63px;
            line-height: 1.5;
            opacity: 0;
            text-align: center;
            transform: translateY(-80px);
            transition: opacity 0.5s ease, transform 0.5s ease;

            @media (min-width: 900px) {
              font-size: 40px;
              letter-spacing: -1.25px;
              line-height: normal;
            }

            &.animate {
              opacity: 1;
              transform: translateY(0);
            }
          `}
        >
          {content.title}
        </h1>
      </Animator>
      <Animator>
        <img
          src={imagePrefix + `/imgs/title-${currentSiteLang}.png`}
          alt={content.welcomeImageAlt}
          css={css`
            margin-top: 10px;
            object-fit: contain;
            opacity: 0;
            transform: translateY(-100px);
            transition: opacity 0.4s 0.2s,
              transform 0.4s cubic-bezier(0.32, 0.29, 0.03, 2.22) 0.2s;
            width: 290px;

            @media (min-width: 900px) {
              margin-top: 20px;
              width: 580px;
            }

            &.animate {
              opacity: 1;
              transform: translateY(0);
            }
          `}
        />
      </Animator>
      <img
        src={imagePrefix + '/imgs/bg-section-01.png'}
        alt=''
        css={css`
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          width: 100%;
          z-index: -1;
        `}
      />
      <Animator>
        <div
          css={css`
            align-items: flex-end;
            display: flex;

            @media (min-width: 900px) {
              margin-top: -40px;
            }
          `}
        >
          <img
            src={imagePrefix + '/imgs/character-sub-04.png'}
            alt=''
            css={css`
              margin-right: -90px;
              position: relative;
              transform: translateY(100%);
              transition: transform 0.5s 0.5s;
              width: 144px;
              z-index: 0;

              @media (min-width: 900px) {
                margin-right: -230px;
                width: 360px;
              }

              .animate & {
                transform: translateY(0);
              }
            `}
          />
          <img
            src={imagePrefix + '/imgs/character-sub-02.png'}
            alt=''
            css={css`
              position: relative;
              transform: translateY(100%);
              transition: transform 0.5s 0.2s;
              width: 180px;
              z-index: 1;

              @media (min-width: 900px) {
                width: 460px;
              }

              .animate & {
                transform: translateY(0);
              }
            `}
          />
          <img
            src={imagePrefix + '/imgs/character-main.png'}
            alt=''
            css={css`
              margin-left: -100px;
              margin-right: -100px;
              position: relative;
              transform: translateY(100%);
              transition: transform 0.5s;
              width: 260px;
              z-index: 2;

              @media (min-width: 900px) {
                margin-left: -250px;
                margin-right: -250px;
                width: 640px;
              }

              .animate & {
                transform: translateY(0);
              }
            `}
          />
          <img
            src={imagePrefix + '/imgs/character-sub-01.png'}
            alt=''
            css={css`
              position: relative;
              transform: translateY(100%);
              transition: transform 0.5s 0.2s;
              width: 180px;
              z-index: 1;

              @media (min-width: 900px) {
                width: 460px;
              }

              .animate & {
                transform: translateY(0);
              }
            `}
          />
          <img
            src={imagePrefix + '/imgs/character-sub-03.png'}
            alt=''
            css={css`
              margin-left: -90px;
              position: relative;
              transform: translateY(100%);
              transition: transform 0.5s 0.5s;
              width: 144px;
              z-index: 0;

              @media (min-width: 900px) {
                margin-left: -230px;
                width: 360px;
              }

              .animate & {
                transform: translateY(0);
              }
            `}
          />
        </div>
      </Animator>
    </section>
  )
}
