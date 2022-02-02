import {css} from '@emotion/react'
import {balooDa2} from '@/common/utils/font-loader'

export default function Footer() {
  return (
    <footer
      id='footer'
      css={css`
        align-items: center;
        background-color: #869cdd;
        display: flex;
        flex-direction: column;
        padding: 22px 0;

        @media (min-width: 900px) {
          flex-direction: row-reverse;
          justify-content: space-between;
          padding: 36px calc(100% * 192 / 1440);
        }
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

              @media (min-width: 900px) {
                width: 48px;
              }
            }
          }
        `}
      >
        <a
          href='https://opensea.io/collection/rira-institute-of-technology-tomoz/'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={require('../public/imgs/icon-opensea.svg')}
            alt='OpenSea logo'
          />
        </a>
        <a
          href='https://twitter.com/RiraUniversity'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={require('../public/imgs/icon-twitter.svg')}
            alt='Twitter logo'
          />
        </a>
        <a
          href='https://open.kakao.com/o/gCz5GkUd'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={require('../public/imgs/icon-kakao.png')}
            alt='Kakao logo'
          />
        </a>
        <a
          href='https://github.com/rira-university/'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={require('../public/imgs/icon-github.svg')}
            loading='lazy'
            alt='GitHub logo'
          />
        </a>
        <a
          href='https://discord.com/invite/4mX3gBRDWt'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={require('../public/imgs/icon-discord.svg')}
            alt='Discord logo'
          />
        </a>
        <a
          href='https://medium.com/rira-institute-of-technology'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={require('../public/imgs/icon-medium.svg')}
            alt='Medium logo'
          />
        </a>
      </div>
      <span
        css={css`
          color: #000;
          font-family: ${balooDa2}, sans-serif;
          font-size: 12px;
          font-weight: bold;
          letter-spacing: -0.38px;
          margin-top: 12px;
          text-align: center;

          @media (min-width: 900px) {
            font-size: 24px;
            letter-spacing: -0.75px;
            margin-top: 0;
          }
        `}
      >
        © Copyright 2022 RIT
      </span>
    </footer>
  )
}
