import {css} from '@emotion/react'
import {LocalePageProps} from '../../../common/lib/locales'
import contents from './cover.json'

const imagePrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Cover({currentLangCode}: LocalePageProps) {
  const content = contents[currentLangCode]

  return (
    <section
      css={css`
        align-items: center;
        display: flex;
        flex-direction: column;
        padding: 50px 15px 0;
        position: relative;
        z-index: 0;

        @media (min-width: 1024px) {
          padding-top: 92px;
        }
      `}
    >
      <h1
        css={css`
          color: #000;
          font-family: Baloo, sans-serif;
          font-size: 20px;
          letter-spacing: -0.63px;
          line-height: 1.5;
          text-align: center;

          @media (min-width: 1024px) {
            font-size: 40px;
            letter-spacing: -1.25px;
            line-height: normal;
          }
        `}
      >
        {content.title}
      </h1>
      <img
        src={imagePrefix + `/title-${currentLangCode}.png`}
        alt={content.welcomeImageAlt}
        css={css`
          margin-top: 10px;
          object-fit: contain;
          width: 290px;

          @media (min-width: 1024px) {
            margin-top: 20px;
            width: 580px;
          }
        `}
      />
      <img
        src={imagePrefix + '/bg-section-01.png'}
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
      <div
        css={css`
          align-items: flex-end;
          display: flex;

          @media (min-width: 1024px) {
            margin-top: -40px;
          }
        `}
      >
        <img
          src={imagePrefix + '/character-sub-04.png'}
          alt=''
          css={css`
            margin-right: -90px;
            position: relative;
            width: 144px;
            z-index: 0;

            @media (min-width: 1024px) {
              margin-right: -230px;
              width: 360px;
            }
          `}
        />
        <img
          src={imagePrefix + '/character-sub-02.png'}
          alt=''
          css={css`
            position: relative;
            width: 180px;
            z-index: 1;

            @media (min-width: 1024px) {
              width: 460px;
            }
          `}
        />
        <img
          src={imagePrefix + '/character-main.png'}
          alt=''
          css={css`
            margin-left: -100px;
            margin-right: -100px;
            position: relative;
            width: 260px;
            z-index: 2;

            @media (min-width: 1024px) {
              margin-left: -250px;
              margin-right: -250px;
              width: 640px;
            }
          `}
        />
        <img
          src={imagePrefix + '/character-sub-01.png'}
          alt=''
          css={css`
            position: relative;
            width: 180px;
            z-index: 1;

            @media (min-width: 1024px) {
              width: 460px;
            }
          `}
        />
        <img
          src={imagePrefix + '/character-sub-03.png'}
          alt=''
          css={css`
            margin-left: -90px;
            position: relative;
            width: 144px;
            z-index: 0;

            @media (min-width: 1024px) {
              margin-left: -230px;
              width: 360px;
            }
          `}
        />
      </div>
    </section>
  )
}
