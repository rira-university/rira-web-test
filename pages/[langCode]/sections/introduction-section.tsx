import {css} from '@emotion/react'

const imagePrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function IntroductionSection() {
  return (
    <section
      css={css`
        align-items: center;
        background-color: #fff9ea;
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 1;

        > p {
          color: #1e1e1e;
          font-family: ONEMobileOTF, sans-serif;
          font-size: 12px;
          font-weight: bold;
          letter-spacing: -0.38px;
          line-height: 1.67;
          margin-top: 20px;
          padding: 0 15px;
          text-align: center;

          @media (min-width: 1024px) {
            font-size: 24px;
            font-stretch: normal;
            letter-spacing: -0.75px;
            line-height: 1.83;
            margin-top: 40px;
          }
        }
      `}
    >
      <img
        src={imagePrefix + '/img-school.png'}
        alt='University image'
        css={css`
          margin-top: -40px;
          width: 320px;

          @media (min-width: 1024px) {
            margin-top: -80px;
            max-width: 1024px;
            width: calc(100% * 1024 / 1440);
          }
        `}
      />
      <h2
        css={css`
          color: #1e1e1e;
          font-family: ONEMobilePOPOTF, sans-serif;
          font-size: 24px;
          letter-spacing: -0.75px;
          line-height: 1.25;
          margin-top: 20px;
          padding: 0 15px;
          text-align: center;

          @media (min-width: 1024px) {
            font-size: 48px;
            letter-spacing: -1.5px;
            margin-top: 40px;
          }
        `}
      >
        이 대학은 2021년에 블록 체인상에 설립한 세계 최초의 대학입니다.
      </h2>
      <p css={css``}>
        사토시의 친구이자 선교사 Rira 가 세운 리라공과대학은 세상을 발전시키고
        이롭게 한다는 슬로건으로, 믹스 기금을 지원 받아 건립되었습니다. 이
        대학에서는, “Web3.0이 세계를 보다 좋게 한다” 라고 하는 이념의 아래
        설립되어, 그런 기술의 전문가를 목표로 하고 있는 학생이 모여 있습니다.
      </p>
      <p css={css``}>
        5개의 학과가 있어, 각각 □□, △△, □□, ▽▽, ◇◇로 한다. 이 세계 최초의
        블록체인 위의 대학은, 반드시 세계에 영향을 미치겠지요. 이 대학의 일원이
        되고 배우는 것으로, 당신은 세계를 바꿀 수 있을지도 모릅니다. 꼭, 당신도
        TOMOZ의 일원이 되어주세요.
      </p>
      <img
        src={imagePrefix + '/img-lab.png'}
        alt=''
        css={css`
          margin-top: -70px;
          position: relative;
          width: 658px;
          z-index: -1;

          @media (min-width: 1024px) {
            max-width: 1333px;
            width: calc(100% * 1333 / 1440);
          }
        `}
      />
      <div
        css={css`
          width: 100%;

          > div {
            height: 25px;
            width: 100%;

            @media (min-width: 1024px) {
              height: 50px;
            }
          }
        `}
      >
        <div
          css={css`
            background-color: #f4bc60;
          `}
        />
        <div
          css={css`
            background-color: #ff866b;
          `}
        />
        <div
          css={css`
            background-color: #e276cb;
          `}
        />
      </div>
    </section>
  )
}
