import {css} from '@emotion/react'

const imagePrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Department() {
  return (
    <section
      css={css`
        align-items: center;
        display: flex;
        flex-direction: column;
        padding: 80px 0;
        position: relative;
      `}
    >
      <div
        css={css`
          background-color: #fff;
          border: solid 2px #000;
          border-radius: 24px;
          box-shadow: 0 10px 0 0 #f8c558;
          width: 280px;
        `}
      >
        <img
          src={imagePrefix + '/img-rira-postit.png'}
          alt='Rira post-it'
          css={css`
            width: 100%;
          `}
        />
        <p
          css={css`
            color: #000;
            font-family: ONEMobileOTF, sans-serif;
            font-size: 12px;
            font-weight: bold;
            letter-spacing: -0.38px;
            line-height: 1.67;
            text-align: center;
          `}
        >
          그들을 대학에서는 TOMOZ라고 부르고 있습니다. 여기에는 세계각국으로부터
          모인 우수한 대학생이 있습니다.
        </p>
        <p
          css={css`
            color: #000;
            font-family: ONEMobileOTF, sans-serif;
            font-size: 12px;
            font-weight: bold;
            letter-spacing: -0.38px;
            line-height: 1.67;
            text-align: center;
          `}
        >
          메이드 카페로 바이트하고 있는 아이나 대학의 견학에 와 있는 고등학생도
          있는 것 같습니다.
        </p>
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
          당신은 어떤 TOMOZ가 됩니까?
        </h2>
      </div>
      <div
        css={css`
          display: flex;
          margin-top: 30px;

          > div {
            align-items: center;
            background-color: #fff;
            border: solid 2px #000;
            border-radius: 24px;
            display: flex;
            flex-direction: column;
            width: 280px;

            img {
              width: 200px;
            }
          }
        `}
      >
        <div
          css={css`
            box-shadow: 0 10px 0 0 #c19ec8;
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
