import {css} from '@emotion/react'
import {LocalePageProps, SiteLanguage} from '@/common/lib/locales'
import {
  notoSansJp,
  oneMobilePop,
  oneMobileRegular,
} from '@/common/utils/font-loader'
import contents from './introduction.json'
import Animator from '@/common/utils/Animator'

const imgSchoolResponsive = require('@/imgs/img-school.png?resize')

export default function Introduction({currentSiteLang}: LocalePageProps) {
  const content = contents[currentSiteLang]

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
          font-family: ${currentSiteLang === SiteLanguage.Jp
              ? notoSansJp
              : oneMobileRegular},
            sans-serif;
          font-size: 12px;
          font-weight: bold;
          letter-spacing: -0.38px;
          line-height: 1.67;
          margin-top: 20px;
          max-width: 100%;
          padding: 0 15px;
          text-align: center;
          width: 420px;

          @media (min-width: 900px) {
            font-size: 24px;
            font-stretch: normal;
            letter-spacing: -0.75px;
            line-height: 1.83;
            margin-top: 40px;
            width: 850px;
          }
        }
      `}
    >
      <div
        css={css`
          margin-top: -40px;
          max-width: 430px;
          position: relative;
          width: 100%;

          @media (min-width: 900px) {
            margin-top: -80px;
            max-width: 1024px;
            width: 100%;
          }
        `}
      >
        <img
          src={require('@/imgs/img-school.png')}
          srcSet={`${require('@/imgs/img-school.png')}, ${require('@/imgs/img-school@2x.png')} 2x, ${require('@/imgs/img-school@3x.png')} 3x`}
          height={imgSchoolResponsive.height}
          width={imgSchoolResponsive.width}
          alt=''
          css={css`
            background: no-repeat center/90%
              url(${imgSchoolResponsive.placeholder});
            height: auto;
            width: 100%;

            &.onload {
              background-image: none;
            }
          `}
        />
        <Animator>
          <img
            src={require('@/imgs/img-graduation.svg')}
            alt=''
            css={css`
              display: none;
              transform: translateX(-50px);
              transition: transform 0.5s ease-out;

              @media (min-width: 900px) {
                bottom: -93px;
                display: inherit;
                left: -153px;
                position: absolute;
                width: 307px;
              }

              &.animate {
                transform: translateX(0);
              }
            `}
          />
        </Animator>
        <Animator>
          <img
            src={require('@/imgs/img-lightbulb.svg')}
            alt=''
            css={css`
              display: none;
              transform: translateX(50px);
              transition: transform 0.5s ease-out;

              @media (min-width: 900px) {
                display: inherit;
                position: absolute;
                right: -90px;
                top: 213px;
                width: 192px;
              }

              &.animate {
                transform: translateX(0);
              }
            `}
          />
        </Animator>
      </div>
      <h2
        css={css`
          color: #1e1e1e;
          font-family: ${currentSiteLang === SiteLanguage.Jp
              ? notoSansJp
              : oneMobilePop},
            sans-serif;
          font-size: 24px;
          font-weight: ${currentSiteLang === SiteLanguage.Jp
            ? 'bold'
            : 'normal'};
          letter-spacing: -0.75px;
          line-height: 1.25;
          margin-top: 20px;
          max-width: 100%;
          padding: 0 15px;
          text-align: center;
          width: 430px;

          @media (min-width: 900px) {
            font-size: 48px;
            letter-spacing: -1.5px;
            margin-top: 40px;
            width: 850px;
          }
        `}
      >
        {content.title}
      </h2>
      <p css={css``}>{content.paragraph1}</p>
      <p css={css``}>{content.paragraph2}</p>
      <img
        src={require('@/imgs/img-lab.svg')}
        height={648}
        width={1333}
        alt=''
        css={css`
          height: auto;
          margin-top: -70px;
          position: relative;
          width: 658px;
          z-index: -1;

          @media (min-width: 900px) {
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

            @media (min-width: 900px) {
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
