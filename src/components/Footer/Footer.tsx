import React from 'react'

import IconArrowUp from '../../assets/arrow-up.svg'

import { LinkComponent } from '@/components/Link'

import styles from './Footer.module.scss'

interface FooterProps {
  t: Translation
  locale: string
  showScrollToTop?: boolean
}

export const Footer = ({ t, showScrollToTop = true, locale = 'de' }: FooterProps) => {
  //
  // Methods
  //

  const scrollToTop = (e: any) => {
    e.target.blur()
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  //
  // Template
  //

  return (
    <>
      {/* Footer */}
      <footer className={`${styles['footer']}`}>
        {showScrollToTop && (
          <div className={`${styles['green']}`}>
            {/* Button: To top */}
            <button type="button" onClick={(e) => scrollToTop(e)}>
              <span>{t.footer.buttonScrollToTop}</span>
              <IconArrowUp />
            </button>
          </div>
        )}

        {/* Content */}
        <div className={`${styles['details']}`}>
          {/* Made in */}
          <div className={`${styles['made-in--mobile']}`}>
            <span>{t.footer.madeInDesktop}</span>
          </div>

          {/* Copyright */}
          <div className={`${styles['details--left']}`}>
            <span>
              © {new Date().getFullYear()} {t.footer.copyright}
            </span>
          </div>

          {/* Made in */}
          <div className={`${styles['made-in--desktop']}`}>
            <span>{t.footer.madeInDesktop}</span>
          </div>

          {/* Legal */}
          <div className={`${styles['details--right']}`}>
            <LinkComponent href="/rechtliches">
              <span>{t.footer.linkToLegal}</span>
            </LinkComponent>
            {locale !== 'de' && (
              <LinkComponent href="/" skipLocaleHandling={true}>
                <span>Deutsch</span>
              </LinkComponent>
            )}
            {locale !== 'en' && (
              <LinkComponent href="/en" skipLocaleHandling={true}>
                <span>English</span>
              </LinkComponent>
            )}
          </div>
        </div>
      </footer>
    </>
  )
}
