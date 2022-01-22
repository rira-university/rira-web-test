import {css} from '@emotion/react'
import {LocalePageProps} from '../../../common/lib/locales'
import {oneMobilePop, oneMobileRegular} from '../../../common/utils/font-loader'
import contents from './introduction.json'

const imagePrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Introduction({currentLangCode}: LocalePageProps) {
  const content = contents[currentLangCode]

  return (
    <section
      css={css`
        align-items: center;
        background-color: #fff9ea;
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 1;

        > p {
          color: #1e1e1e;
          font-family: ${oneMobileRegular}, sans-serif;
          font-size: 12px;
          font-weight: bold;
          letter-spacing: -0.38px;
          line-height: 1.67;
          margin-top: 20px;
          max-width: 100%;
          padding: 0 15px;
          text-align: center;
          width: 420px;

          @media (min-width: 1024px) {
            font-size: 24px;
            font-stretch: normal;
            letter-spacing: -0.75px;
            line-height: 1.83;
            margin-top: 40px;
            width: 780px;
          }
        }
      `}
    >
      <div
        css={css`
          margin-top: -40px;
          max-width: 420px;
          position: relative;
          width: 100%;

          @media (min-width: 1024px) {
            margin-top: -80px;
            max-width: 1024px;
            width: 100%;
          }
        `}
      >
        <img
          src={imagePrefix + '/img-school.png'}
          alt=''
          css={css`
            width: 100%;
          `}
        />
        <img
          src={imagePrefix + '/img-graduation.png'}
          alt=''
          css={css`
            display: none;

            @media (min-width: 1024px) {
              bottom: -93px;
              display: inherit;
              left: -153px;
              position: absolute;
              width: 307px;
            }
          `}
        />
        <img
          src={imagePrefix + '/img-lightbulb.png'}
          alt=''
          css={css`
            display: none;

            @media (min-width: 1024px) {
              display: inherit;
              position: absolute;
              right: -90px;
              top: 213px;
              width: 192px;
            }
          `}
        />
      </div>
      <h2
        css={css`
          color: #1e1e1e;
          font-family: ${oneMobilePop}, sans-serif;
          font-size: 24px;
          letter-spacing: -0.75px;
          line-height: 1.25;
          margin-top: 20px;
          max-width: 100%;
          padding: 0 15px;
          text-align: center;
          width: 420px;

          @media (min-width: 1024px) {
            font-size: 48px;
            letter-spacing: -1.5px;
            margin-top: 40px;
            width: 780px;
          }
        `}
      >
        {content.title}
      </h2>
      <p css={css``}>{content.paragraph1}</p>
      <p css={css``}>{content.paragraph2}</p>
      <img
        src={imagePrefix + '/img-lab.png'}
        alt=''
        css={css`
          margin-top: -70px;
          position: relative;
          width: 658px;
          z-index: -1;

          @media (min-width: 1024px) {
            max-width: 1333px;
            width: calc(100% * 1333 / 1440);
          }
        `}
      />
      <div
        css={css`
          width: 100%;

          > div {
            height: 25px;
            width: 100%;

            @media (min-width: 1024px) {
              height: 50px;
            }
          }
        `}
      >
        <div
          css={css`
            background-color: #f4bc60;
          `}
        />
        <div
          css={css`
            background-color: #ff866b;
          `}
        />
        <div
          css={css`
            background-color: #e276cb;
          `}
        />
      </div>
    </section>
  )
}
