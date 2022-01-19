import {useState} from 'react'
import Link from 'next/link'
import {css} from '@emotion/react'
import {LangCode, LocalePageProps} from '../lib/locales'

const imagePrefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function Navbar({contents, currentLangCode}: LocalePageProps) {
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  return (
    <nav
      css={css`
        align-items: center;
        background-color: white;
        display: flex;
        height: 60px;
        justify-content: space-between;
        position: sticky;
        top: 0;
        z-index: 2;

        @media (min-width: 1024px) {
          height: 120px;
          padding: 0 calc(100% * 192 / 1440);
        }
      `}
    >
      <div
        css={css`
          background-color: white;
          display: flex;
          height: 100%;
          justify-content: space-between;
          padding: 0 20px;
          width: 100%;

          @media (min-width: 1024px) {
            padding: 0;
          }
        `}
      >
        <img
          src={imagePrefix + '/logo-rit.png'}
          alt='RIT logo'
          css={css`
            object-fit: contain;
            width: 109px;

            @media (min-width: 1024px) {
              width: 219px;
            }
          `}
        />
        <img
          src={imagePrefix + '/icon-menu.png'}
          alt='Menu button'
          onClick={() => setIsMenuOpened(!isMenuOpened)}
          css={css`
            cursor: pointer;
            object-fit: contain;
            width: 20px;

            @media (min-width: 1024px) {
              display: none;
            }
          `}
        />
        <div
          onClick={() => setIsMenuOpened(false)}
          css={css`
            background-color: black;
            content: '';
            display: ${isMenuOpened ? 'block' : 'none'};
            height: 100vh;
            left: 0;
            opacity: 0.5;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: -1;

            @media (min-width: 1024px) {
              display: none;
            }
          `}
        />
      </div>
      <div
        css={css`
          align-items: flex-end;
          background-color: white;
          bottom: 0;
          display: flex;
          flex-direction: column;
          left: 0;
          padding-bottom: 12px;
          position: absolute;
          transform: translateY(${isMenuOpened ? '100%' : 0});
          transition: transform 0.3s;
          width: 100%;
          z-index: -1;

          @media (min-width: 1024px) {
            align-items: center;
            flex-direction: row;
            height: 100%;
            justify-content: flex-end;
            padding-bottom: 0;
            position: relative;
            transform: translateY(0);
            transition: transform 0s;
          }
        `}
      >
        <div
          css={css`
            align-items: flex-end;
            display: flex;
            flex-direction: column;

            @media (min-width: 1024px) {
              align-items: center;
              flex-direction: row;
            }

            > a {
              font-family: Baloo, sans-serif;
              font-size: 24px;
              height: 48px;
              letter-spacing: -0.75px;
              line-height: 1.25;
              padding: 9px 20px;

              @media (min-width: 1024px) {
                height: auto;
                margin-left: 20px;
                padding: 0;
              }
            }
          `}
        >
          <a
            onClick={() => alert('Coming Soon')}
            css={css`
              cursor: pointer;
            `}
          >
            Mint
          </a>
          <a href='https://opensea.io/' target='_blank' rel='noreferrer'>
            OpenSea
          </a>
        </div>
        <div
          css={css`
            align-items: center;
            display: flex;

            height: 48px;
            justify-content: flex-end;
            padding: 0 20px;

            @media (min-width: 1024px) {
              margin-left: 40px;
              padding: 0;
            }
          `}
        >
          {Object.values(LangCode).map((langCode) => (
            <Link key={langCode} href={`/${langCode}`}>
              <a
                href={`/${langCode}`}
                css={css`
                  color: ${langCode === currentLangCode
                    ? '#969696'
                    : '#c8c8c8'};
                  font-family: BalooDa, sans-serif;
                  font-size: 24px;
                  letter-spacing: -0.75px;

                  &:not(:first-of-type) {
                    margin-left: 10px;
                  }

                  @media (min-width: 1024px) {
                    margin: 0;
                  }
                `}
              >
                {langCode.toUpperCase()}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
