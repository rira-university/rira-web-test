import {css} from '@emotion/react'
import {balooDa2} from '../../../common/utils/font-loader'

const imagePrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Sitemap() {
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

        @media (min-width: 1024px) {
          background-size: 40px 40px;
          justify-content: center;
          padding: 126px 32px;
        }

        > div {
          align-items: center;
          display: flex;
          flex: 50%;
          flex-direction: column;

          &:nth-of-type(n + 3) {
            margin-top: 20px;

            @media (min-width: 1024px) {
              margin-top: 0;
            }
          }

          @media (min-width: 1024px) {
            flex: inherit;

            &:not(:first-of-type) {
              margin-left: 32px;
            }
          }

          img {
            width: 120px;

            @media (min-width: 1024px) {
              width: 240px;
            }
          }

          span {
            color: #000;
            font-family: ${balooDa2}, sans-serif;
            font-size: 20px;
            letter-spacing: -0.63px;
            line-height: normal;
            margin-top: 10px;
            text-align: center;

            @media (min-width: 1024px) {
              font-size: 40px;
              letter-spacing: -1.25px;
              margin-top: 20px;
            }
          }
        }
      `}
    >
      <div css={css``}>
        <a href='#'>
          <img
            src={imagePrefix + '/link-home.png'}
            alt='Go to Home'
            css={css``}
          />
        </a>
        <a
          href='#'
          css={css`
            margin-top: 0;

            @media (min-width: 1024px) {
              margin-top: 20px;
            }
          `}
        >
          <span css={css``}>HOME</span>
        </a>
      </div>
      <div css={css``}>
        <img
          src={imagePrefix + '/link-tomoz.png'}
          alt='Go to Tomoz'
          css={css``}
        />
        <span css={css``}>Coming Soon</span>
      </div>
      <div css={css``}>
        <img src={imagePrefix + '/link-lab.png'} alt='Go to Lab' css={css``} />
        <span css={css``}>Coming Soon</span>
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
