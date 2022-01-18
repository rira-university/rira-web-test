import {css} from '@emotion/react'

const imagePrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Cover() {
  return (
    <section
      css={css`
        align-items: center;
        display: flex;
        flex-direction: column;
        padding: 50px 15px 0;
        position: relative;
        z-index: 0;
      `}
    >
      <h1
        css={css`
          color: #000;
          font-family: Baloo, sans-serif;
          font-size: 20px;
          letter-spacing: -0.63px;
          line-height: 1.5;
          text-align: center;
        `}
      >
        Rira Institute of Technology
      </h1>
      <img
        src={imagePrefix + '/title-kr.png'}
        alt=''
        css={css`
          height: 100px;
          margin-top: 10px;
          object-fit: contain;
          width: 290px;
        `}
      />
      <img
        src={imagePrefix + '/bg-section-01.png'}
        alt=''
        css={css`
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          width: 100%;
          z-index: -1;
        `}
      />
      <div
        css={css`
          align-items: flex-end;
          display: flex;
        `}
      >
        <img
          src={imagePrefix + '/character-sub-04.png'}
          alt=''
          css={css`
            height: 144px;
            margin-right: -90px;
            position: relative;
            width: 144px;
            z-index: 0;
          `}
        />
        <img
          src={imagePrefix + '/character-sub-02.png'}
          alt=''
          css={css`
            height: 180px;
            position: relative;
            width: 180px;
            z-index: 1;
          `}
        />
        <img
          src={imagePrefix + '/character-main.png'}
          alt=''
          css={css`
            height: 260px;
            margin-left: -100px;
            margin-right: -100px;
            position: relative;
            width: 260px;
            z-index: 2;
          `}
        />
        <img
          src={imagePrefix + '/character-sub-01.png'}
          alt=''
          css={css`
            height: 180px;
            position: relative;
            width: 180px;
            z-index: 1;
          `}
        />
        <img
          src={imagePrefix + '/character-sub-03.png'}
          alt=''
          css={css`
            height: 144px;
            margin-left: -90px;
            position: relative;
            width: 144px;
            z-index: 0;
          `}
        />
      </div>
    </section>
  )
}
