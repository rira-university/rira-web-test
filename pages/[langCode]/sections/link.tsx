import {css} from '@emotion/react'

const imagePrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Link() {
  return (
    <section
      css={css`
        background-image: linear-gradient(to right, #b8cbee 2px, transparent 0),
          linear-gradient(to bottom, #b8cbee 2px, transparent 0);
        background-position: 16px -2px;
        background-size: 30px 30px;
        display: flex;
        flex-wrap: wrap;
        padding: 60px 4px;

        > div {
          align-items: center;
          display: flex;
          flex: 50%;
          flex-direction: column;

          &:nth-of-type(n + 3) {
            margin-top: 20px;
          }

          img {
            width: 120px;
          }

          span {
            color: #000;
            font-family: BalooDa, sans-serif;
            font-size: 20px;
            letter-spacing: -0.63px;
            line-height: normal;
            margin-top: 10px;
            text-align: center;
          }
        }
      `}
    >
      <div css={css``}>
        <img src={imagePrefix + '/link-home.png'} alt='Home' css={css``} />
        <span css={css``}>HOME</span>
      </div>
      <div css={css``}>
        <img src={imagePrefix + '/link-tomoz.png'} alt='Tomoz' css={css``} />
        <span css={css``}>TOMOZ</span>
      </div>
      <div css={css``}>
        <img src={imagePrefix + '/link-lab.png'} alt='Lab' css={css``} />
        <span css={css``}>LAB</span>
      </div>
      <div css={css``}>
        <img
          src={imagePrefix + '/link-comingsoon.png'}
          alt='Coming Soon'
          css={css``}
        />
        <span css={css``}>Coming Soon</span>
      </div>
    </section>
  )
}
