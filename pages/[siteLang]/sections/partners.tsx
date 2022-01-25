import {css} from '@emotion/react'
import {oneMobilePop} from '../../../common/utils/font-loader'

const imagePrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Partners() {
  return (
    <section
      css={css`
        background-color: #ffd0c5;
        padding: 60px 0;

        @media (min-width: 900px) {
          padding: 80px 0 108px;
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
          text-align: center;

          @media (min-width: 900px) {
            font-size: 60px;
            letter-spacing: -1.88px;
            line-height: 1.2;
          }
        `}
      >
        Partners
      </h2>
      <p
        css={css`
          color: #ff866b;
          font-family: ${oneMobilePop}, sans-serif;
          font-size: 16px;
          letter-spacing: -0.5px;
          line-height: 1.25;
          margin-top: 10px;
          text-align: center;

          @media (min-width: 900px) {
            font-size: 30px;
            letter-spacing: -0.94px;
            line-height: 1.33;
          }
        `}
      >
        KawaiiGirlNFT x Doge Sound Club
      </p>
      <div
        css={css`
          align-items: center;
          display: flex;
          justify-content: center;
          margin-top: 20px;

          @media (min-width: 900px) {
            margin-top: 30px;
          }
        `}
      >
        <img
          src={imagePrefix + '/imgs/logo-girl.png'}
          alt='Rira logo'
          css={css`
            width: 120px;

            @media (min-width: 900px) {
              width: 300px;
            }
          `}
        />
        <img
          src={imagePrefix + '/imgs/img-partnersx.png'}
          alt='Cross symbol'
          css={css`
            margin-left: 8px;
            width: 24px;

            @media (min-width: 900px) {
              margin-left: 30px;
            }
          `}
        />
        <img
          src={imagePrefix + '/imgs/logo-dogesound.png'}
          alt='Doge Sound Club logo'
          css={css`
            margin-left: 8px;
            width: 120px;

            @media (min-width: 900px) {
              margin-left: 30px;
              width: 300px;
            }
          `}
        />
      </div>
    </section>
  )
}
