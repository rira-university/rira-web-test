import {css} from '@emotion/react'

const imagePrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function DepartmentSection() {
  return (
    <section
      css={css`
        align-items: center;
        display: flex;
        flex-direction: column;
        padding: 80px 0;
        position: relative;

        @media (min-width: 1024px) {
          padding: 180px 40px;
        }
      `}
    >
      <div
        css={css`
          background-color: #fff;
          border: solid 2px #000;
          border-radius: 24px;
          box-shadow: 0 10px 0 0 #f8c558;
          width: 280px;

          @media (min-width: 1024px) {
            align-items: center;
            box-shadow: 20px 20px 0 0 #f8c558;
            display: flex;
            height: 480px;
            width: 864px;
          }
        `}
      >
        <img
          src={imagePrefix + '/img-rira-postit.png'}
          alt='Rira post-it'
          css={css`
            width: 100%;

            @media (min-width: 1024px) {
              margin-left: -68px;
              margin-top: 10px;
              width: 480px;
            }
          `}
        />
        <div
          css={css`
            @media (min-width: 1024px) {
              margin-left: 40px;
            }

            > p {
              color: #000;
              font-family: ONEMobileOTF, sans-serif;
              font-size: 12px;
              font-weight: bold;
              letter-spacing: -0.38px;
              line-height: 1.67;
              padding: 0 20px;
              text-align: center;

              @media (min-width: 1024px) {
                font-size: 24px;
                letter-spacing: -0.75px;
                line-height: 1.83;
                padding: 0;
                text-align: left;
              }
            }
          `}
        >
          <p
            css={css`
              margin-bottom: 10px;
              margin-top: 10px;

              @media (min-width: 1024px) {
                margin-bottom: 20px;
                margin-top: 0;
              }
            `}
          >
            그들을 대학에서는 TOMOZ라고 부르고 있습니다. 여기에는 세계
            각국으로부터 모인 우수한 대학생이 있습니다.
          </p>
          <p css={css``}>
            메이드 카페로 바이트하고 있는 아이나 대학의 견학에 와 있는
            고등학생도 있는 것 같습니다.
          </p>
          <h2
            css={css`
              color: #000;
              font-family: ONEMobilePOPOTF, sans-serif;
              font-size: 24px;
              letter-spacing: -0.75px;
              line-height: 1.25;
              margin-top: 20px;
              padding: 0 20px;
              text-align: center;

              @media (min-width: 1024px) {
                font-size: 30px;
                letter-spacing: -0.94px;
                line-height: 1.47;
                padding: 0;
              }
            `}
          >
            당신은 어떤 TOMOZ가 됩니까?
          </h2>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          margin-top: 30px;

          @media (min-width: 1024px) {
            column-gap: 40px;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 80px;
            max-width: 1200px;
            row-gap: 80px;
          }

          > div {
            align-items: center;
            background-color: #fff;
            border: solid 2px #000;
            border-radius: 24px;
            display: flex;
            flex-direction: column;
            width: 280px;

            @media (min-width: 1024px) {
              width: 340px;
            }

            img {
              width: 200px;

              @media (min-width: 1024px) {
                width: 100%;
              }
            }

            h3 {
              color: #1e1e1e;
              font-family: ONEMobilePOPOTF, sans-serif;
              font-size: 24px;
              letter-spacing: -0.75px;
              line-height: 1.25;
              text-align: center;

              @media (min-width: 1024px) {
                font-size: 40px;
                letter-spacing: -1.25px;
                line-height: 1.5;
              }
            }

            p {
              color: #000;
              font-family: ONEMobileOTF, sans-serif;
              font-size: 12px;
              font-weight: bold;
              letter-spacing: -0.38px;
              line-height: 1.67;
              margin-bottom: 40px;
              margin-top: 10px;
              text-align: center;

              @media (min-width: 1024px) {
                font-size: 24px;
                letter-spacing: -0.75px;
                line-height: 1.67;
                margin-bottom: 68px;
                margin-top: 12px;
              }
            }
          }
        `}
      >
        <div
          css={css`
            box-shadow: 0 10px 0 0 #c19ec8;

            @media (min-width: 1024px) {
              box-shadow: 20px 20px 0 0 #c19ec8;
            }
          `}
        >
          <img src={imagePrefix + '/img-class-finance.png'} alt='' />
          <h3>금융공학과</h3>
          <p>
            그들을 대학에서는 TOMOZ 당신은 어떤 TOMOZ가 됩니까? 그들을
            대학에서는 TOMOZ 당신은 어떤 TOMOZ가 됩니까?
          </p>
        </div>
        <div
          css={css`
            box-shadow: 0 10px 0 0 #c1d5ea;

            @media (min-width: 1024px) {
              box-shadow: 20px 20px 0 0 #c1d5ea;
            }
          `}
        >
          <img src={imagePrefix + '/img-class-space.png'} alt='' />
          <h3>우주공학과</h3>
          <p>
            그들을 대학에서는 TOMOZ 당신은 어떤 TOMOZ가 됩니까? 그들을
            대학에서는 TOMOZ 당신은 어떤 TOMOZ가 됩니까?
          </p>
        </div>
        <div
          css={css`
            box-shadow: 0 10px 0 0 #4db399;

            @media (min-width: 1024px) {
              box-shadow: 20px 20px 0 0 #4db399;
            }
          `}
        >
          <img src={imagePrefix + '/img-class-computer.png'} alt='' />
          <h3>컴퓨터공학과</h3>
          <p>
            그들을 대학에서는 TOMOZ 당신은 어떤 TOMOZ가 됩니까? 그들을
            대학에서는 TOMOZ 당신은 어떤 TOMOZ가 됩니까?
          </p>
        </div>
        <div
          css={css`
            box-shadow: 0 10px 0 0 #ff8ab7;

            @media (min-width: 1024px) {
              box-shadow: 20px 20px 0 0 #ff8ab7;
            }
          `}
        >
          <img src={imagePrefix + '/img-class-chemistry.png'} alt='' />
          <h3>화학과</h3>
          <p>
            그들을 대학에서는 TOMOZ 당신은 어떤 TOMOZ가 됩니까? 그들을
            대학에서는 TOMOZ 당신은 어떤 TOMOZ가 됩니까?
          </p>
        </div>
        <div
          css={css`
            box-shadow: 0 10px 0 0 #fe875e;

            @media (min-width: 1024px) {
              box-shadow: 20px 20px 0 0 #fe875e;
            }
          `}
        >
          <img src={imagePrefix + '/img-class-electric.png'} alt='' />
          <h3>전자과</h3>
          <p>
            그들을 대학에서는 TOMOZ 당신은 어떤 TOMOZ가 됩니까? 그들을
            대학에서는 TOMOZ 당신은 어떤 TOMOZ가 됩니까?
          </p>
        </div>
      </div>
      <img
        src={imagePrefix + '/bg-section-04.png'}
        alt='An image for background'
        css={css`
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          width: 100%;
          z-index: -1;
        `}
      />
    </section>
  )
}
