import {css} from '@emotion/react'

const imagePrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Footer() {
  return (
    <footer
      css={css`
        align-items: center;
        background-color: #869cdd;
        display: flex;
        flex-direction: column;
        padding: 22px 0;
      `}
    >
      <div
        css={css`
          a {
            &:not(:first-of-type) {
              margin-left: 20px;
            }

            img {
              width: 24px;
            }
          }
        `}
      >
        <a>
          <img
            src={imagePrefix + '/icon-twitterjp.png'}
            alt='Twitter JP logo'
          />
        </a>
        <a>
          <img src={imagePrefix + '/icon-twitter.png'} alt='Twitter logo' />
        </a>
        <a>
          <img src={imagePrefix + '/icon-github.png'} alt='GitHub logo' />
        </a>
        <a>
          <img src={imagePrefix + '/icon-discord.png'} alt='Discord logo' />
        </a>
        <a>
          <img src={imagePrefix + '/icon-medium.png'} alt='Medium logo' />
        </a>
      </div>
      <span
        css={css`
          color: #000;
          font-family: BalooDa, sans-serif;
          font-size: 12px;
          font-stretch: normal;
          font-style: normal;
          font-weight: normal;
          letter-spacing: -0.38px;
          line-height: normal;
          margin-top: 12px;
          text-align: center;
        `}
      >
        © Copyright 2022 RIT
      </span>
    </footer>
  )
}
