import {css} from '@emotion/react'
import {oneMobilePop} from '@/common/utils/font-loader'

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
          src={require('@/imgs/logo-girl.png')}
          srcSet={`${require('@/imgs/logo-girl.png')}, ${require('@/imgs/logo-girl@2x.png')} 2x, ${require('@/imgs/logo-girl@3x.png')} 3x`}
          height={120}
          width={120}
          sizes='120px, (min-width: 900px) 300px'
          loading='lazy'
          alt='Rira logo'
          css={css`
            height: auto;
            width: 120px;

            @media (min-width: 900px) {
              width: 300px;
            }
          `}
        />
        <img
          src={require('@/imgs/img-partnersx.svg')}
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
          src={require('@/imgs/logo-dogesound.png')}
          srcSet={`${require('@/imgs/logo-dogesound.png')}, ${require('@/imgs/logo-dogesound@2x.png')} 2x, ${require('@/imgs/logo-dogesound@3x.png')} 3x`}
          height={120}
          width={120}
          sizes='120px, (min-width: 900px) 300px'
          loading='lazy'
          alt='Doge Sound Club logo'
          css={css`
            height: auto;
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
