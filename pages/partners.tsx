import {css} from '@emotion/react'

const imagePrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Partners() {
  return (
    <section
      css={css`
        background-color: #ffd0c5;
        padding: 60px 0;
      `}
    >
      <h2
        css={css`
          color: #000;
          font-family: ONEMobilePOPOTF, sans-serif;
          font-size: 24px;
          letter-spacing: -0.75px;
          line-height: 1.25;
          text-align: center;
        `}
      >
        Partners
      </h2>
      <p
        css={css`
          color: #ff866b;
          font-family: ONEMobilePOPOTF, sans-serif;
          font-size: 16px;
          letter-spacing: -0.5px;
          line-height: 1.25;
          margin-top: 10px;
          text-align: center;
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
        `}
      >
        <img
          src={imagePrefix + '/logo-girl.png'}
          alt='Rira logo'
          css={css`
            width: 120px;
          `}
        />
        <img
          src={imagePrefix + '/img-partnersx.png'}
          alt='Cross symbol'
          css={css`
            margin-left: 8px;
            width: 24px;
          `}
        />
        <img
          src={imagePrefix + '/logo-dogesound.png'}
          alt='Doge Sound Club logo'
          css={css`
            margin-left: 8px;
            width: 120px;
          `}
        />
      </div>
    </section>
  )
}
