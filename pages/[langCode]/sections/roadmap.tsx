import {css} from '@emotion/react'

const imagePrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Roadmap() {
  return (
    <section
      css={css`
        align-items: center;
        background-color: #e4f1f4;
        background-image: linear-gradient(to right, white 2px, transparent 2px),
          linear-gradient(to bottom, white 2px, transparent 2px);
        background-position: -2px -2px;
        background-size: 20px 20px;
        display: flex;
        flex-direction: column;
        padding: 60px 40px 78px;
        position: relative;
      `}
    >
      <h2
        css={css`
          color: #000;
          font-family: ONEMobilePOPOTF, sans-serif;
          font-size: 24px;
          letter-spacing: -0.75px;
          line-height: 1.25;
          position: relative;
          text-align: center;
          z-index: 1;
        `}
      >
        Roadmap
      </h2>
      <div
        css={css`
          align-items: center;
          display: flex;
          flex-direction: column;
          margin-top: 20px;
          position: relative;
          z-index: 1;

          > div {
            align-items: center;
            display: flex;
            flex-direction: column;

            > h3 {
              background-color: #f3bc61;
              border-radius: 6px;
              color: #fff;
              font-family: ONEMobilePOPOTF, sans-serif;
              font-size: 20px;
              height: 36px;
              letter-spacing: -0.63px;
              line-height: 2;
              text-align: center;
              width: 135px;
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
              word-break: keep-all;
            }
          }

          > img {
            width: 36px;
          }
        `}
      >
        <div>
          <h3>대학 준공</h3>
          <p>커뮤니티를 기반으로, RIT 웹이 개설됩니다.</p>
        </div>
        <img src={imagePrefix + '/img-arrow.png'} alt='Arrow' />
        <div>
          <h3>학생증 발급</h3>
          <p>민팅을 통해 최대 10,000명의 TOMOZ가 리라공과대학에 입학합니다.</p>
        </div>
        <img src={imagePrefix + '/img-arrow.png'} alt='Arrow' />
        <div>
          <h3>학사 과정</h3>
          <p>퀘스트를 완수하여 학사 과정을 이수합니다.</p>
        </div>
        <img src={imagePrefix + '/img-arrow.png'} alt='Arrow' />
        <div>
          <h3>수료</h3>
          <p>
            학사 과정을 이수한 TOMOZ는 연구자로서 본격적인 연구활동에 참여할 수
            있습니다.
          </p>
        </div>
      </div>
      <img
        src={imagePrefix + '/img-desk.png'}
        alt='An image for background'
        css={css`
          bottom: 0;
          object-fit: cover;
          position: absolute;
          width: 100%;
        `}
      />
    </section>
  )
}
