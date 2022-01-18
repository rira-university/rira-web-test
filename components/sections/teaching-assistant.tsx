import {css} from '@emotion/react'

const imagePrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function TeachingAssistant() {
  return (
    <section
      css={css`
        background-color: #fff0d2;
        padding: 40px 0 80px;
        position: relative;
      `}
    >
      <header
        css={css`
          align-items: center;
          display: flex;
          justify-content: center;
          position: relative;
          z-index: 1;
        `}
      >
        <h2
          css={css`
            color: #000;
            font-family: ONEMobilePOPOTF, sans-serif;
            font-size: 24px;
            letter-spacing: -0.75px;
            line-height: 1.25;
            position: absolute;
            text-align: center;
          `}
        >
          Teaching Assistant
        </h2>
        <img
          src={imagePrefix + '/img-header.png'}
          alt='Teaching Assistant'
          css={css`
            width: 300px;
          `}
        />
      </header>
      <div
        css={css`
          display: flex;
          margin-top: 80px;
          position: relative;
          z-index: 1;

          > div {
            align-items: center;
            display: flex;
            flex-direction: column;
            height: 392px;
            min-width: 220px;
            position: relative;
            width: 220px;

            > div {
              background-color: pink;
              border-color: pink;
              border-radius: 100%;
              height: 172px;
              width: 172px;
            }

            > h3 {
              color: #1e1e1e;
              font-family: ONEMobilePOPOTF, sans-serif;
              font-size: 24px;
              letter-spacing: -0.75px;
              line-height: 1.25;
              margin-top: 20px;
              text-align: center;
            }

            > p {
              color: #000;
              font-family: ONEMobileOTF, sans-serif;
              font-size: 12px;
              font-weight: bold;
              letter-spacing: -0.38px;
              line-height: 1.67;
              margin-top: 10px;
              text-align: center;
            }

            > img {
              margin-top: -60px;
              position: absolute;
              width: 100%;
              z-index: -1;
            }
          }
        `}
      >
        <div css={css``}>
          <div css={css``} />
          <h3>사람1</h3>
          <p>
            문장길이예시 문장길이예시 문장길이예시 문장길이예시 문장길이예시
            문장길이예시 문장길이예시 문장길이예시
          </p>
          <img src={imagePrefix + '/img-clipboard.png'} alt='' css={css``} />
        </div>
        <div css={css``}>
          <div css={css``} />
          <h3>사람1</h3>
          <p>
            문장길이예시 문장길이예시 문장길이예시 문장길이예시 문장길이예시
            문장길이예시 문장길이예시 문장길이예시
          </p>
          <img src={imagePrefix + '/img-clipboard.png'} alt='' css={css``} />
        </div>
        <div css={css``}>
          <div css={css``} />
          <h3>사람1</h3>
          <p>
            문장길이예시 문장길이예시 문장길이예시 문장길이예시 문장길이예시
            문장길이예시 문장길이예시 문장길이예시
          </p>
          <img src={imagePrefix + '/img-clipboard.png'} alt='' css={css``} />
        </div>
        <div css={css``}>
          <div css={css``} />
          <h3>사람1</h3>
          <p>
            문장길이예시 문장길이예시 문장길이예시 문장길이예시 문장길이예시
            문장길이예시 문장길이예시 문장길이예시
          </p>
          <img src={imagePrefix + '/img-clipboard.png'} alt='' css={css``} />
        </div>
        <div css={css``}>
          <div css={css``} />
          <h3>사람1</h3>
          <p>
            문장길이예시 문장길이예시 문장길이예시 문장길이예시 문장길이예시
            문장길이예시 문장길이예시 문장길이예시
          </p>
          <img src={imagePrefix + '/img-clipboard.png'} alt='' css={css``} />
        </div>
        <div css={css``}>
          <div css={css``} />
          <h3>사람1</h3>
          <p>
            문장길이예시 문장길이예시 문장길이예시 문장길이예시 문장길이예시
            문장길이예시 문장길이예시 문장길이예시
          </p>
          <img src={imagePrefix + '/img-clipboard.png'} alt='' css={css``} />
        </div>
      </div>
      <img
        src={imagePrefix + '/bg-section-05.png'}
        alt='An image for background'
        css={css`
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          width: 100%;
        `}
      />
    </section>
  )
}
