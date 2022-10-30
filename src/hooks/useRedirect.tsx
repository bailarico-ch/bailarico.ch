import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import { LanguageDetector } from 'next-language-detector'

import i18nConfig from '../../next-i18next.config'

import languageDetector from '../utils/languageDetector'

const detector = languageDetector as LanguageDetector

export const useRedirect = (to?: string) => {
  //
  // Router
  //

  const router = useRouter()
  const path = to || router.asPath

  //
  // State
  //

  const [locale, setLocale] = useState(i18nConfig.i18n.defaultLocale)

  //
  // Effects
  //

  // Language detection and redirects
  useEffect(() => {
    let detectedLng = path === '/' ? 'de' : detector.detect()

    // console.log(router.asPath.slice(1))
    // console.log(router.asPath)

    detectedLng = i18nConfig.i18n.locales.includes(router.asPath.slice(1).split('/')[0])
      ? router.asPath.slice(1).split('/')[0]
      : detectedLng

    if (detectedLng && detectedLng !== locale) {
      setLocale(detectedLng)

      //
      // 404 pages
      //
      if (
        //
        detector.cache &&
        path.startsWith('/' + detectedLng) &&
        router.route.includes('/404')
      ) {
        detector.cache(detectedLng)

        router.replace('/' + detectedLng + '/404')
        return
      }

      //
      // /de page (same as main)
      //
      if (
        //
        detector.cache &&
        !router.route.includes('/404') &&
        router.asPath === '/de'
      ) {
        setLocale('de')

        detector.cache('de')

        router.replace('/')
        return
      }

      //
      // Other pages
      //
      if (
        //
        detector.cache &&
        !router.route.includes('/404') &&
        path !== `/${detectedLng}` &&
        path !== `/`
      ) {
        detector.cache(detectedLng)

        if (path.startsWith(`/${detectedLng}/`)) {
          router.replace(path)
        } else {
          router.replace('/' + detectedLng + path)
        }
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [router])
  }, [router, path, locale])

  return locale
}

// export const Redirect = () => {
//   useRedirect()
//   return <></>
// }
