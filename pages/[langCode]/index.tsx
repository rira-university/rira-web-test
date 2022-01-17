import Head from 'next/head'
import {css} from '@emotion/react'
import {LangCode, LocalePageProps, localeContents} from '../../lib/locales'

const imagePrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Index({contents}: LocalePageProps) {
  return (
    <>
      <Head>
        <title>{contents.index.title}</title>
      </Head>

      <main
        css={css`
          overflow: hidden;
        `}
      >
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
          <p
            css={css`
              color: #000;
              font-family: Baloo, sans-serif;
              font-size: 20px;
              font-stretch: normal;
              font-style: normal;
              font-weight: normal;
              letter-spacing: -0.63px;
              line-height: 1.5;
              text-align: center;
            `}
          >
            Rira Institute of Technology
          </p>
          <img
            src={imagePrefix + '/title-kr.png'}
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
              css={css`
                height: 180px;
                position: relative;
                width: 180px;
                z-index: 1;
              `}
            />
            <img
              src={imagePrefix + '/character-main.png'}
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
              css={css`
                height: 180px;
                position: relative;
                width: 180px;
                z-index: 1;
              `}
            />
            <img
              src={imagePrefix + '/character-sub-03.png'}
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

        <section
          css={css`
            align-items: center;
            background-color: #fff9ea;
            display: flex;
            flex-direction: column;
            position: relative;
            z-index: 1;
          `}
        >
          <img
            src={imagePrefix + '/img-school.png'}
            css={css`
              margin-top: -40px;
              width: 320px;
            `}
          />
          <h2
            css={css`
              color: #000;
              font-family: ONEMobilePOPOTF, sans-serif;
              font-size: 24px;
              font-stretch: normal;
              font-style: normal;
              font-weight: normal;
              letter-spacing: -0.75px;
              line-height: 1.25;
              margin-top: 20px;
              padding: 0 15px;
              text-align: center;
            `}
          >
            이 대학은 2021년에 블록 체인상에 설립한 세계 최초의 대학입니다.
          </h2>
          <p
            css={css`
              color: #1e1e1e;
              font-family: ONEMobileOTF, sans-serif;
              font-size: 12px;
              font-stretch: normal;
              font-style: normal;
              font-weight: bold;
              letter-spacing: -0.38px;
              line-height: 1.67;
              margin-top: 20px;
              padding: 0 15px;
              text-align: center;
            `}
          >
            사토시의 친구이자 선교사 Rira 가 세운 리라공과대학은 세상을
            발전시키고 이롭게 한다는 슬로건으로, 믹스 기금을 지원 받아
            건립되었습니다. 이 대학에서는, “Web3.0이 세계를 보다 좋게 한다” 라고
            하는 이념의 아래 설립되어, 그런 기술의 전문가를 목표로 하고 있는
            학생이 모여 있습니다.
          </p>
          <p
            css={css`
              color: #1e1e1e;
              font-family: ONEMobileOTF, sans-serif;
              font-size: 12px;
              font-stretch: normal;
              font-style: normal;
              font-weight: bold;
              letter-spacing: -0.38px;
              line-height: 1.67;
              margin-top: 20px;
              padding: 0 15px;
              text-align: center;
            `}
          >
            5개의 학과가 있어, 각각 □□, △△, □□, ▽▽, ◇◇로 한다. 이 세계 최초의
            블록체인 위의 대학은, 반드시 세계에 영향을 미치겠지요. 이 대학의
            일원이 되고 배우는 것으로, 당신은 세계를 바꿀 수 있을지도 모릅니다.
            꼭, 당신도 TOMOZ의 일원이 되어주세요.
          </p>
          <img
            src={imagePrefix + '/img-lab.png'}
            alt=''
            css={css`
              height: 320px;
              margin-top: -70px;
              position: relative;
              z-index: -1;
            `}
          />
          <div
            css={css`
              background-color: #f4bc60;
              height: 25px;
              width: 100%;
            `}
          />
          <div
            css={css`
              background-color: #ff866b;
              height: 25px;
              width: 100%;
            `}
          />
          <div
            css={css`
              background-color: #e276cb;
              height: 25px;
              width: 100%;
            `}
          />
        </section>
      </main>
    </>
  )
}

export async function getStaticPaths() {
  const paths = Object.values(LangCode).map((langCode: LangCode) => {
    return {
      params: {
        langCode: langCode,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params}: {params: {langCode: LangCode}}) {
  return {
    props: {
      contents: localeContents[params.langCode] || localeContents[LangCode.En],
      currentLangCode: params.langCode,
    },
  }
}
