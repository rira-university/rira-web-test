import {css} from '@emotion/react'
import {LocalePageProps} from '../../../common/lib/locales'
import {oneMobilePop, oneMobileRegular} from '../../../common/utils/font-loader'
import contents from './department.json'

const imagePrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Department({currentLangCode}: LocalePageProps) {
  const content = contents[currentLangCode]

  return (
    <section
      css={css`
        align-items: center;
        display: flex;
        flex-direction: column;
        padding: 80px 0;
        position: relative;

        @media (min-width: 1024px) {
          padding: 180px 40px;
        }
      `}
    >
      <div
        css={css`
          background-color: #fff;
          border: solid 2px #000;
          border-radius: 24px;
          box-shadow: 0 10px 0 0 #f8c558;
          padding-bottom: 40px;
          width: 280px;

          @media (min-width: 1024px) {
            align-items: center;
            box-shadow: 20px 20px 0 0 #f8c558;
            display: flex;
            height: 480px;
            padding-bottom: 0;
            width: 864px;
          }
        `}
      >
        <img
          src={imagePrefix + '/img-rira-postit.png'}
          alt=''
          css={css`
            width: 100%;

            @media (min-width: 1024px) {
              margin-left: -68px;
              margin-top: 10px;
              width: 480px;
            }
          `}
        />
        <div
          css={css`
            display: flex;
            flex-direction: column;

            @media (min-width: 1024px) {
              margin-left: 40px;
              padding-right: 20px;
            }

            > p {
              color: #000;
              font-family: ${oneMobileRegular}, sans-serif;
              font-size: 12px;
              font-weight: bold;
              letter-spacing: -0.38px;
              line-height: 1.67;
              padding: 0 20px;
              text-align: center;

              @media (min-width: 1024px) {
                font-size: 24px;
                letter-spacing: -0.75px;
                line-height: 1.83;
                padding: 0;
                text-align: left;
              }
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
              margin-top: 20px;
              order: 1;
              padding: 0 20px;
              text-align: center;

              @media (min-width: 1024px) {
                font-size: 30px;
                letter-spacing: -0.94px;
                line-height: 1.47;
                padding: 0;
                text-align: left;
              }
            `}
          >
            {content.title}
          </h2>
          <p
            css={css`
              margin-bottom: 10px;
              margin-top: 10px;

              @media (min-width: 1024px) {
                margin-bottom: 20px;
                margin-top: 0;
              }
            `}
          >
            {content.paragraph1}
          </p>
          <p css={css``}>{content.paragraph2}</p>
        </div>
      </div>
      <div
        css={css`
          column-gap: 100px;
          display: flex;
          margin-top: 30px;
          overflow-x: auto;
          padding-bottom: 10px;
          scroll-snap-type: x mandatory;
          width: 100%;

          @media (min-width: 1024px) {
            column-gap: 40px;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 80px;
            max-width: 1200px;
            overflow-x: visible;
            padding: 0;
            row-gap: 80px;
          }

          > div {
            align-items: center;
            background-color: #fff;
            border: solid 2px #000;
            border-radius: 24px;
            display: flex;
            flex-direction: column;
            min-width: 280px;
            scroll-snap-align: center;
            width: 280px;

            &:first-of-type {
              margin-left: calc((100% - 280px) / 2);

              @media (min-width: 1024px) {
                margin-left: 0;
              }
            }

            &:last-of-type {
              margin-right: calc((100% - 280px) / 2);

              @media (min-width: 1024px) {
                margin-right: 0;
              }
            }

            @media (min-width: 1024px) {
              width: 340px;
            }

            img {
              width: 200px;

              @media (min-width: 1024px) {
                width: 100%;
              }
            }

            h3 {
              color: #1e1e1e;
              font-family: ${oneMobilePop}, sans-serif;
              font-size: 24px;
              letter-spacing: -0.75px;
              line-height: 1.25;
              text-align: center;

              @media (min-width: 1024px) {
                font-size: 40px;
                letter-spacing: -1.25px;
                line-height: 1.5;
              }
            }

            p {
              color: #000;
              font-family: ${oneMobileRegular}, sans-serif;
              font-size: 12px;
              font-weight: bold;
              letter-spacing: -0.38px;
              line-height: 1.67;
              margin-bottom: 40px;
              margin-top: 10px;
              padding: 0 20px;
              text-align: center;

              @media (min-width: 1024px) {
                font-size: 24px;
                letter-spacing: -0.75px;
                line-height: 1.67;
                margin-bottom: 68px;
                margin-top: 12px;
              }
            }
          }
        `}
      >
        <div
          css={css`
            box-shadow: 0 10px 0 0 #c19ec8;

            @media (min-width: 1024px) {
              box-shadow: 20px 20px 0 0 #c19ec8;
            }
          `}
        >
          <img src={imagePrefix + '/img-class-finance.png'} alt='' />
          <h3>{content.financialEngineering.title}</h3>
          <p>{content.financialEngineering.description}</p>
        </div>
        <div
          css={css`
            box-shadow: 0 10px 0 0 #c1d5ea;

            @media (min-width: 1024px) {
              box-shadow: 20px 20px 0 0 #c1d5ea;
            }
          `}
        >
          <img src={imagePrefix + '/img-class-space.png'} alt='' />
          <h3>{content.aerospaceEngineering.title}</h3>
          <p>{content.aerospaceEngineering.description}</p>
        </div>
        <div
          css={css`
            box-shadow: 0 10px 0 0 #4db399;

            @media (min-width: 1024px) {
              box-shadow: 20px 20px 0 0 #4db399;
            }
          `}
        >
          <img src={imagePrefix + '/img-class-computer.png'} alt='' />
          <h3>{content.computerEngineering.title}</h3>
          <p>{content.computerEngineering.description}</p>
        </div>
        <div
          css={css`
            box-shadow: 0 10px 0 0 #ff8ab7;

            @media (min-width: 1024px) {
              box-shadow: 20px 20px 0 0 #ff8ab7;
            }
          `}
        >
          <img src={imagePrefix + '/img-class-chemistry.png'} alt='' />
          <h3>{content.chemistry.title}</h3>
          <p>{content.chemistry.description}</p>
        </div>
        <div
          css={css`
            box-shadow: 0 10px 0 0 #fe875e;

            @media (min-width: 1024px) {
              box-shadow: 20px 20px 0 0 #fe875e;
            }
          `}
        >
          <img src={imagePrefix + '/img-class-electric.png'} alt='' />
          <h3>{content.electricalEngineering.title}</h3>
          <p>{content.electricalEngineering.description}</p>
        </div>
      </div>
      <img
        src={imagePrefix + '/bg-section-04.png'}
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
    </section>
  )
}
