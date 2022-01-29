import {css} from '@emotion/react'
import {LocalePageProps} from '../../../common/lib/locales'
import {baloo2} from '../../../common/utils/font-loader'
import Animator from '../../../common/utils/Animator'
import contents from './cover.json'

const bgSection01Responsive = require('@/imgs/bg-section-01.png?resize')
const bgSection01Svg = require('@/imgs/bg-section-01.svg')

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
          src={require(`../../../public/imgs/title-${currentSiteLang}.svg`)} // ts module resolution doesn't work with interpolation
          height={200}
          width={580}
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
        src={bgSection01Svg}
        alt=''
        css={css`
          background: center/cover url(${bgSection01Responsive.placeholder});
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
            src={require('@/imgs/character-sub-04.png')}
            srcSet={`${require('@/imgs/character-sub-04.png')}, ${require('@/imgs/character-sub-04@2x.png')} 2x, ${require('@/imgs/character-sub-04@3x.png')} 3x`}
            height={144}
            width={144}
            alt=''
            css={css`
              height: auto;
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
            src={require('@/imgs/character-sub-02.png')}
            srcSet={`${require('@/imgs/character-sub-02.png')}, ${require('@/imgs/character-sub-02@2x.png')} 2x, ${require('@/imgs/character-sub-02@3x.png')} 3x`}
            height={180}
            width={180}
            alt=''
            css={css`
              height: auto;
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
            src={require('@/imgs/character-main.png')}
            srcSet={`${require('@/imgs/character-main.png')}, ${require('@/imgs/character-main@2x.png')} 2x, ${require('@/imgs/character-main@3x.png')} 3x`}
            height={260}
            width={260}
            sizes='260px, (min-width: 900px) 640px'
            alt=''
            css={css`
              height: auto;
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
            src={require('@/imgs/character-sub-01.png')}
            srcSet={`${require('@/imgs/character-sub-01.png')}, ${require('@/imgs/character-sub-01@2x.png')} 2x, ${require('@/imgs/character-sub-01@3x.png')} 3x`}
            height={180}
            width={180}
            alt=''
            css={css`
              height: auto;
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
            src={require('@/imgs/character-sub-03.png')}
            srcSet={`${require('@/imgs/character-sub-03.png')}, ${require('@/imgs/character-sub-03@2x.png')} 2x, ${require('@/imgs/character-sub-03@3x.png')} 3x`}
            height={144}
            width={144}
            alt=''
            css={css`
              height: auto;
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
