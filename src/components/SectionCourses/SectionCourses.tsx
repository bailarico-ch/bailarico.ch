import React from 'react'

import sharedStyles from '@/styles/Shared.module.scss'
import styles from './SectionCourses.module.scss'

import IconLevel0 from '../../assets/level-0.svg'
import IconLevel1 from '../../assets/level-1.svg'
import IconLevel2 from '../../assets/level-2.svg'
import IconLevel3 from '../../assets/level-3.svg'
// import IconDownload from '../../assets/download.svg'

// import { Image } from '@/components/Image'

import { parseParagraph, parseTitle } from '@/utils/parseTexts'

import courses from 'cursos'

interface SectionCoursesProps {
  t: TranslationWithImages
  locale?: string
}

export const SectionCourses = ({ t, locale = 'de' }: SectionCoursesProps) => {
  //
  // Template
  //

  return (
    <>
      {/* Section */}
      <section id="courses" className={`${sharedStyles.section} ${styles.courses}`}>
        {/* Title */}
        <h2 dangerouslySetInnerHTML={{ __html: parseTitle(t.courses.title) }} />

        {/* Container */}
        <div className={`${styles['container']}`}>
          {/* Old: Image */}
          {/* <div className={`${styles['image']}`}>
            <Image
              src={`/images/${t.courses.courses}`}
              placeholder={`${t.courses.courses}`}
              alt=""
              width={800}
            />
          </div> */}

          {/* Table */}
          <div className={`${styles['table']}`}>
            {/* Header */}
            <div className={`${styles['table__header']}`}>
              <div className={`${styles['table__title']}`}>{t.courses.table.header.title}</div>
              <div className={`${styles['table__subtitle']}`}>
                {t.courses.table.header.subtitle}
              </div>
            </div>
            <div className={`${styles['table__levels']}`}>
              <div className={`${styles['table__level']}`}>
                <IconLevel0 />
                <span>{t.courses.table.levels.level0}</span>
              </div>
              <div className={`${styles['table__level']}`}>
                <IconLevel1 />
                <span>{t.courses.table.levels.level1}</span>
              </div>
              <div className={`${styles['table__level']}`}>
                <IconLevel2 />
                <span>{t.courses.table.levels.level2}</span>
              </div>
              <div className={`${styles['table__level']}`}>
                <IconLevel3 />
                <span>{t.courses.table.levels.level3}</span>
              </div>
            </div>

            {/* Content */}
            <div className={`${styles['table__schedule']}`}>
              {/* Days */}
              {Object.keys(courses).map((day, index) => {
                if (courses[day as keyof typeof t.courses.table.days].length === 0) {
                  return
                }
                return (
                  <div key={index} className={`${styles['table__day']}`}>
                    <div className={`${styles['table__day__name']}`}>
                      {t.courses.table.days[day as keyof typeof t.courses.table.days]}
                    </div>
                    <div className={`${styles['timeslots']}`}>
                      {/* Timeslots */}
                      {Array.from(
                        new Set(
                          courses[day as keyof typeof t.courses.table.days].map(
                            (course) => course.time
                          )
                        )
                      ).map((time, index) => {
                        return (
                          <div key={index} className={`${styles['timeslot']}`}>
                            {/* Courses */}
                            {courses[day as keyof typeof t.courses.table.days]
                              .filter((course) => course.time === time)
                              .map((course, index) => {
                                return (
                                  <div key={index} className={`${styles['course']}`}>
                                    <div className={`${styles['course-spec']}`}>
                                      <div className={`${styles['course-spec__time']}`}>
                                        {course.time}
                                      </div>
                                      <div className={`${styles['course-spec__level']}`}>
                                        {course.level === 0 && <IconLevel0 />}
                                        {course.level === 1 && <IconLevel1 />}
                                        {course.level === 2 && <IconLevel2 />}
                                        {course.level === 3 && <IconLevel3 />}
                                      </div>
                                    </div>
                                    <div className={`${styles['course-info']}`}>
                                      <div className={`${styles['course-info__name']}`}>
                                        {locale === 'de' ? course.nameGerman : course.nameEnglish}
                                      </div>
                                      <div className={`${styles['course-info__instructor']}`}>
                                        {course.instructor}
                                      </div>
                                    </div>
                                  </div>
                                )
                              })}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Footer */}
            <div className={`${styles['table__footer']}`}>
              <div className={`${styles['table__footer__left']}`}>
                <span>{t.courses.table.footer.duration}</span>
                <span>{t.courses.table.footer.durationTime}</span>
              </div>
              {/* Logo */}
              <div className={`${styles['table__footer__logo']}`}>
                <img
                  src={`/logo.svg`}
                  alt="Bailarico Logo"
                  width={112}
                  height={32}
                  className={`${styles['table__footer__logo']}`}
                />
              </div>
              <div className={`${styles['table__footer__right']}`}>
                <span>{t.contact.phoneNumber}</span>
                <span>{t.contact.emailAddress}</span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className={`${styles['content']}`}>
            {/* Old: PDF Card */}
            {/* <div className={`${styles['pdf-card']}`}>
              <div className={`${styles['pdf-card__main']}`}>
                <div className={`${styles['pdf-card__image']}`}>
                  <Image
                    src={`/images/courses-icon.png`}
                    placeholder={`courses-icon.png`}
                    alt=""
                    width={168}
                    height={208}
                  />
                </div>

                <div>
                  <div className={`${styles['pdf-card__title']}`}>{t.courses.pdf.title}</div>
                </div>
              </div>

              <a
                href={`/${t.courses.pdf.file}`}
                target="_blank"
                rel="noreferrer"
                className={`${styles['pdf-card__button']}`}
              >
                <span>{t.courses.pdf.button}</span>
                <IconDownload />
              </a>
            </div> */}

            {/* Text */}
            <div className={`${styles['details']}`}>
              {/* Registration */}
              <div className={`${styles['detail']}`}>
                {/* Title */}
                <h3>{t.courses.registration.title}</h3>
                <div className={`${styles['text']}`}>
                  {t.courses.registration.text.map((text: any, index) => {
                    return (
                      <p key={index} dangerouslySetInnerHTML={{ __html: parseParagraph(text) }} />
                    )
                  })}
                </div>

                {/* Contact details */}
                <div className={`${styles['info']}`}>
                  {/* Phone */}
                  <div className={`${styles['info-item']}`}>
                    <div className={`${styles['label']}`}>{t.contact.labelPhone}</div>
                    <a href={t.contact.linkPhone} target="_blank" rel="noopener noreferrer">
                      <span>{t.contact.phoneNumber}</span>
                    </a>
                  </div>
                  {/* Email */}
                  <div className={`${styles['info-item']}`}>
                    <div className={`${styles['label']}`}>{t.contact.labelEmail}</div>
                    <a href={t.contact.linkEmail} target="_blank" rel="noopener noreferrer">
                      <span>{t.contact.emailAddress}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className={`${styles['detail']}`}>
                <h3>{t.courses.pricing.title}</h3>
                <div className={`${styles['text']}`}>
                  {t.courses.pricing.text.map((text: any, index) => {
                    return (
                      <p key={index} dangerouslySetInnerHTML={{ __html: parseParagraph(text) }} />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
