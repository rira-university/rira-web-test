import {css} from '@emotion/react'
import {balooDa2} from '@/common/utils/font-loader'

export default function Activity() {
  return (
    <section
      id='activity'
      css={css`
        background-image: linear-gradient(to right, #b8cbee 2px, transparent 0),
          linear-gradient(to bottom, #b8cbee 2px, transparent 0);
        background-position: 16px -2px;
        background-size: 30px 30px;
        column-gap: 36px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 60px 4px;
        row-gap: 20px;

        @media (min-width: 1200px) {
          background-size: 40px 40px;
          column-gap: 32px;
          justify-content: center;
          padding: 126px 32px;
        }

        > div {
          align-items: center;
          display: flex;
          flex: 33%;
          flex-direction: column;

          @media (min-width: 1200px) {
            flex: inherit;
          }

          a {
            cursor: pointer;
            display: flex;
            flex-direction: column;
          }

          img {
            height: auto;
            width: 120px;

            @media (min-width: 1200px) {
              width: 240px;
            }
          }

          span {
            color: #000;
            font-family: ${balooDa2}, sans-serif;
            font-size: 20px;
            font-weight: bold;
            letter-spacing: -0.63px;
            line-height: normal;
            margin-top: 10px;
            text-align: center;

            @media (min-width: 1200px) {
              font-size: 40px;
              letter-spacing: -1.25px;
              margin-top: 20px;
            }
          }
        }
      `}
    >
      <div css={css``}>
        <a
          css={css`
            position: relative;
          `}
          href='https://admission.rira.university/'
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={require('@/imgs/link-home.svg')}
            alt='Go to Mint'
            css={css``}
          />
          <span css={css``}>MINT</span>
          <span
            className='d-day'
            css={css`
              &.d-day {
                color: white;
                left: calc(50% - 2px);
                position: absolute;
                top: 40px;
                transform: translateX(-50%);

                @media (min-width: 1200px) {
                  left: calc(50% - 5px);
                  top: 80px;
                }
              }
            `}
          >
            SOON
          </span>
        </a>
      </div>
      <div css={css``}>
        <img
          src={require('@/imgs/link-tomoz.svg')}
          alt='Go to Tomoz'
          css={css``}
        />
        <span css={css``}>Coming Soon</span>
      </div>
      <div css={css``}>
        <img src={require('@/imgs/link-lab.svg')} alt='Go to Lab' css={css``} />
        <span css={css``}>Coming Soon</span>
      </div>
      <div css={css``}>
        <img
          src={require('@/imgs/link-comingsoon.svg')}
          height={160}
          width={120}
          alt='Coming Soon'
          css={css``}
        />
        <span css={css``}>Coming Soon</span>
      </div>
    </section>
  )
}
