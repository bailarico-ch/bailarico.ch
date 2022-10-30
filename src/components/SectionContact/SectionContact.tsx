import React from 'react'

import { motion } from 'framer-motion'

import IconLink from '../../assets/external-link.svg'
import IconInstagram from '../../assets/instagram.svg'
import IconFacebook from '../../assets/facebook.svg'
import IconYouTube from '../../assets/youtube.svg'

import sharedStyles from '@/styles/Shared.module.scss'
import styles from './SectionContact.module.scss'

import { Image } from '@/components/Image'

import { parseTitle } from '@/utils/parseTexts'

interface SectionContactProps {
  t: Translation
}

export const SectionContact = ({ t }: SectionContactProps) => {
  //
  // Template
  //

  return (
    <>
      {/* Content */}
      <section id="contact" className={`${sharedStyles['section']} ${styles['contact']}`}>
        {/* Title */}
        <h2 dangerouslySetInnerHTML={{ __html: parseTitle(t.contact.title) }} />

        {/* Container */}
        <div className={`${styles['container']}`}>
          {/* Studio */}
          <div className={`${styles['studio']}`}>
            {/* Exterior */}
            <div className={`${styles['studio-photo']}`}>
              <motion.div
                //
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={'/images/contact/exterior.jpg'}
                  placeholder={'contact/exterior.jpg'}
                  // placeholder={'/images/contact/exterior.jpg?lqip'}
                  alt=""
                  width={700}
                  height={420}
                />
              </motion.div>
              {/* Caption */}
              <div className={`${styles['studio-photo__caption']}`}>
                <span>{t.contact.labelStudioExterior}</span>
              </div>
            </div>

            {/* Interior */}
            <div className={`${styles['studio-photo']}`}>
              <motion.div
                //
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={'/images/contact/interior.jpg'}
                  placeholder={'contact/interior.jpg'}
                  // placeholder={'/images/contact/interior.jpg?lqip'}
                  alt=""
                  width={700}
                  height={420}
                />
              </motion.div>
              {/* Caption */}
              <div className={`${styles['studio-photo__caption']}`}>
                <span>{t.contact.labelStudioInterior}</span>
              </div>
            </div>
          </div>

          {/* Contact details */}
          <div className={`${styles['details']}`}>
            {/* Details */}
            <div className={`${styles['info']}`}>
              {/* Email */}
              <div className={`${styles['info-item']}`}>
                <div className={`${styles['label']}`}>{t.contact.labelEmail}</div>
                <a href={t.contact.linkEmail} target="_blank" rel="noopener noreferrer">
                  <span>{t.contact.emailAddress}</span>
                </a>
              </div>

              {/* Phone */}
              <div className={`${styles['info-item']}`}>
                <div className={`${styles['label']}`}>{t.contact.labelPhone}</div>
                <a href={t.contact.linkPhone} target="_blank" rel="noopener noreferrer">
                  <span>{t.contact.phoneNumber}</span>
                </a>
              </div>

              {/* Location */}
              <div className={`${styles['info-item']}`}>
                <div className={`${styles['label']}`}>{t.contact.labelAddress}</div>
                <a href={t.contact.linkGoogleMaps} target="_blank" rel="noopener noreferrer">
                  <span>{t.contact.address.streetAndNumber}</span>
                  <br />
                  <span>{t.contact.address.postcodeAndCity}</span>
                </a>
              </div>

              {/* Social */}
              <div className={`${styles['info-item']}`}>
                <div className={`${styles['label']}`}>{t.contact.labelSocial}</div>
                <div className={`${styles['info-item--social-items']}`}>
                  <a
                    href={t.socialMedia.linkInstagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <IconInstagram />
                  </a>
                  <a
                    href={t.socialMedia.linkFacebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <IconFacebook />
                  </a>
                  <a
                    href={t.socialMedia.linkYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <IconYouTube />
                  </a>
                </div>
              </div>
            </div>

            {/* Map*/}
            <a
              href={t.contact.linkGoogleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles['map']}`}
            >
              <Image
                src={'/images/contact/map.png'}
                placeholder={'contact/map.png'}
                // placeholder={'/images/contact/map.png?lqip'}
                alt=""
                width={700}
                height={590}
              />
              <div className={`${styles['button']}`}>
                <span>{t.contact.buttonOpenGoogleMaps}</span>
                <IconLink />
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
