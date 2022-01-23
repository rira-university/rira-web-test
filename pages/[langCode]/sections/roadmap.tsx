import {css} from '@emotion/react'
import {LangCode, LocalePageProps} from '../../../common/lib/locales'
import {
  notoSansJp,
  oneMobilePop,
  oneMobileRegular,
} from '../../../common/utils/font-loader'
import contents from './roadmap.json'

const imagePrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Roadmap({currentLangCode}: LocalePageProps) {
  const content = contents[currentLangCode]

  return (
    <section
      id='roadmap'
      css={css`
        align-items: center;
        background-color: #e4f1f4;
        background-image: linear-gradient(to right, white 2px, transparent 2px),
          linear-gradient(to bottom, white 2px, transparent 2px);
        background-position: -2px -2px;
        background-size: 20px 20px;
        display: flex;
        flex-direction: column;
        padding: 60px 40px 78px;
        position: relative;

        @media (min-width: 900px) {
          background-size: 36px 36px;
          padding: 120px 0 100px;
        }
      `}
    >
      <h2
        css={css`
          color: #000;
          font-family: ${oneMobilePop}, sans-serif;
          font-size: 24px;
          letter-spacing: -0.75px;
          line-height: 1.25;
          position: relative;
          text-align: center;
          z-index: 1;

          @media (min-width: 900px) {
            font-size: 60px;
            letter-spacing: -1.88px;
            line-height: 1.2;
          }
        `}
      >
        Roadmap
      </h2>

      <div
        css={css`
          margin-top: 20px;
          position: relative;
          width: 280px;
          z-index: 1;

          @media (min-width: 900px) {
            height: 750px;
            margin-top: 38px;
            width: 960px;
          }
        `}
      >
        <div
          css={css`
            align-items: center;
            display: flex;
            flex-direction: column;

            @media (min-width: 900px) {
              height: 525px;
              justify-content: center;
              margin-left: 25px;
              margin-right: 62px;
              margin-top: 24px;
              padding: 0 95px;
            }

            > div {
              align-items: center;
              display: flex;
              flex-direction: column;

              @media (min-width: 900px) {
                flex-direction: row;
                height: 60px;
                width: 100%;
              }

              > h3 {
                align-items: center;
                background-color: #f3bc61;
                border-radius: 6px;
                color: #fff;
                display: flex;
                font-family: ${currentLangCode === LangCode.Jp
                    ? notoSansJp
                    : oneMobilePop},
                  sans-serif;
                font-size: 20px;
                font-weight: ${currentLangCode === LangCode.Jp
                  ? 'bold'
                  : 'normal'};
                height: 36px;
                justify-content: center;
                letter-spacing: -0.63px;
                line-height: 2;
                text-align: center;
                width: 135px;

                @media (min-width: 900px) {
                  border-radius: 12px;
                  font-size: 30px;
                  height: 60px;
                  letter-spacing: -0.94px;
                  line-height: 1.33;
                  min-width: 240px;
                  width: 240px;
                }
              }

              > p {
                color: #000;
                font-family: ${currentLangCode === LangCode.Jp
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
                  margin-left: 20px;
                  margin-top: 0;
                  text-align: left;
                }
              }
            }

            > img {
              width: 36px;

              @media (min-width: 900px) {
                align-self: flex-start;
                margin-left: 90px;
                width: 60px;
              }
            }
          `}
        >
          <div>
            <h3>{content.step1.name}</h3>
            <p>{content.step1.description}</p>
          </div>
          <img src={imagePrefix + '/img-arrow.png'} alt='Next' />
          <div>
            <h3>{content.step2.name}</h3>
            <p>{content.step2.description}</p>
          </div>
          <img src={imagePrefix + '/img-arrow.png'} alt='Next' />
          <div>
            <h3>{content.step3.name}</h3>
            <p>{content.step3.description}</p>
          </div>
          <img src={imagePrefix + '/img-arrow.png'} alt='Next' />
          <div>
            <h3>{content.step4.name}</h3>
            <p>{content.step4.description}</p>
          </div>
        </div>
        <img
          src={imagePrefix + '/img-computer.png'}
          alt=''
          css={css`
            display: none;
            position: absolute;
            top: 0;
            z-index: -1;

            @media (min-width: 900px) {
              display: inline;
            }
          `}
        />
      </div>

      <div
        css={css`
          background: linear-gradient(to right, #989898, #bbbbbb);
          bottom: 0;
          height: 32px;
          position: absolute;
          width: 100%;

          @media (min-width: 900px) {
            height: 150px;
          }
        `}
      />

      <img
        src={imagePrefix + '/img-desk.png'}
        alt=''
        css={css`
          bottom: 8px;
          object-fit: cover;
          position: absolute;
          width: 320px;

          @media (min-width: 900px) {
            bottom: 37px;
            width: 1440px;
          }
        `}
      />
    </section>
  )
}
