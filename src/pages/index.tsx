import React, {
  useEffect,
  useRef,
  // useState
} from 'react'
import type { NextPage } from 'next'
import { motion } from 'framer-motion'

import { Layout } from '@/components/Layout'
import { SectionTeam } from '@/components/SectionTeam'
import { SectionContact } from '@/components/SectionContact'
import { SectionCourses } from '@/components/SectionCourses'
import { SectionPhotos } from '@/components/SectionPhotos'
import { SectionSocialMedia } from '@/components/SectionSocialMedia'

import styles from '@/styles/Home.module.scss'

import { parseParagraph } from '@/utils/parseTexts'

import { AnimatedText } from '@/components/AnimatedText'

import useTextsGenerator from 'src/hooks/useTextsGenerator'
import { useRedirect } from 'src/hooks/useRedirect'

const Home: NextPage = () => {
  //
  // Router
  //

  const locale = useRedirect()

  const t = useTextsGenerator(locale)

  //
  // State
  //

  const words = t.hero.title.middle.length > 0 ? t.hero.title.middle : ['Salsa']
  // Before hydration, don't play the video
  // const [shouldPlay, setShouldPlay] = useState(false)

  // const [isFail, setIsFail] = useState(false)

  //
  // Animations
  //

  const videoAnimation = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      y: -20,
    },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.3,
        // duration: 0.4,
      },
    },
  }

  //
  // useRefs
  //

  const videoRef = useRef<HTMLVideoElement>(null) as React.MutableRefObject<HTMLVideoElement>
  const coursesRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>
  const photosRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>
  const contactRef = useRef<HTMLDivElement>(null) as React.MutableRefObject<HTMLDivElement>

  //
  // useEffects
  //

  useEffect(() => {
    setTimeout(() => {
      if (videoRef.current.paused) {
        videoRef.current.play()
      }
    }, 400)
  }, [])

  // useEffect(() => {
  //   // After hydration, play the video
  //   setShouldPlay(true)
  // }, [])

  // useEffect(() => {
  //   // videoRef.current.play()

  //   $('body').on('click touchstart', function () {
  //     const videoElement = document.getElementById('home_video')
  //     if (videoElement.playing) {
  //       // video is already playing so do nothing
  //     } else {
  //       // video is not playing
  //       // so play video now
  //       videoElement.play()
  //     }
  //   })
  // }, [])

  //
  // Methods
  //

  const playPauseVideo = () => {
    if (videoRef.current.currentTime > 0 && !videoRef.current.paused) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
  }

  // const playPauseVideo = () => {
  //   if (
  //     videoRef.current.currentTime > 0 &&
  //     !videoRef.current.paused &&
  //     videoRef.current.readyState > 2 &&
  //     isFail === false
  //   ) {
  //     videoRef.current.pause()
  //   } else {
  //     try {
  //       videoRef.current.play()
  //     } catch (error) {
  //       setIsFail(true)
  //     }
  //   }
  // }

  // const playVideo = () => {
  //   if (
  //     !(
  //       videoRef.current.currentTime > 0 &&
  //       !videoRef.current.paused &&
  //       videoRef.current.readyState > 2
  //     ) ||
  //     isFail === true
  //   ) {
  //     setIsFail(false)
  //     videoRef.current.play()
  //   }
  // }

  //
  // Template
  //

  return (
    <>
      <Layout refs={[coursesRef, photosRef, contactRef]}>
        <div
          className={styles['container']}
          // onTouchStart={() => playVideo()}
          // onClick={() => playVideo()}
        >
          <main className={styles['main']}>
            {/* Hero */}
            <div className={`${styles['hero']}`}>
              {/* Video */}
              <div className={`${styles['video']}`}>
                <motion.div initial="hidden" animate="visible" variants={videoAnimation}>
                  <video
                    ref={videoRef}
                    autoPlay
                    // autoPlay={shouldPlay}
                    width="1440"
                    height="720"
                    loop
                    muted
                    playsInline
                    onContextMenu={() => false}
                    poster={`/${t.images.hero.preview}`}
                    onClick={() => playPauseVideo()}
                  >
                    <source src={`/${t.images.hero.video}`} type="video/mp4" />
                    Your browser doesn't support HTML5 video tag.
                  </video>
                </motion.div>
              </div>

              {/* Title */}
              <h1 className={styles['title']}>
                <div>{t.hero.title.top}</div>
                <AnimatedText words={words} />
                <div>{t.hero.title.bottom}</div>
              </h1>

              {/* Text */}
              <div className={`${styles['text']}`}>
                {t.hero.intro.map((introText: any, index) => {
                  return (
                    <p
                      key={index}
                      dangerouslySetInnerHTML={{ __html: parseParagraph(introText) }}
                    />
                  )
                })}
              </div>
            </div>

            {/* Courses */}
            <div ref={coursesRef}>
              <SectionCourses t={t} locale={locale} />
            </div>

            {/* Photos */}
            <div ref={photosRef}>
              <SectionPhotos t={t} />
            </div>

            {/* Social Media */}
            <SectionSocialMedia t={t} />

            {/* Team */}
            <SectionTeam t={t} />

            {/* Contact */}
            <div ref={contactRef}>
              <SectionContact t={t} />
            </div>
          </main>
        </div>
      </Layout>
    </>
  )
}

export default Home
