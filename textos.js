const texts = {
  //
  //
  // Imágenes
  //
  //

  images: {
    // socialShare: 'https://bailarico.ch/social.png',
    // socialShare: 'https://bailarico-ch.github.io/bailarico.ch/social.png', // for testing
    socialShare: 'social.png', // for testing
    // socialShare: '',

    // Home page hero
    hero: {
      // Video - 1440x720px - recomendacion: no mayor a 30-40MB
      // video: 'bailarico.ch/hero.mp4', // for testing
      video: 'hero.mp4',

      // Preview del video - 1440x720px
      // preview: 'bailarico.ch/hero_preview.jpg', // for testing
      preview: 'hero_preview.jpg',
    },

    // Galeria
    // Poner FOTOS de galeria en `public/images/gallery` formatos: .jpg, .jpeg, .png
    // Poner VIDEOS de galeria en `public/videos/gallery` formato: .mp4
    // VIDEOS de YouTube deben incluir `https://www.youtube.com/embed/` y luego el ID del video
    photosAndVideos: [
      //
      'image00001.jpeg',
      'bailarico_vanity_fhd-0117-9855.jpg',
      'ladies_201121_a_4k-0173-2442.jpg',
      'laluzenpink_4k-0047-5298.jpg',
      'losvagabundos210301-0007-2844.jpg',
      'IMG_1675.jpg',
      'IMG_1642.jpg',
      'IMG_1620.jpg',
      'image00098.jpeg',
      'image00097.jpeg',
      'image00095.jpeg',
      'image00093.jpeg',
      'image00014.jpeg',
      '724A0224_2.jpg',
      'hero_v1.mp4',
      'https://www.youtube.com/embed/VKUq_-etNLQ',
    ],

    //
    socialMedia: [
      //
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
      '5.jpg',
      '6.jpg',
      '7.jpg',
      '8.jpg',
    ],

    //
    studio: {
      //
      interior: 'interior.jpg',
      exterior: 'exterior.jpg',
    },
  },

  //
  //
  // Idioma: Alemán
  //
  //

  // Texte
  deutsch: {
    // Meta tags
    meta: {
      home: {
        pageTitle: 'BailaRico - Tanzschule für Salsa in Zürich',
        pageDescription:
          'Lerne Salsa tanzen in Zürich. Tanzschule BailaRico bietet Tanzkurse für Salsa On1, Salsa On2 (Mambo), Cha Cha Cha, Ladies Style, Urban und High Heels an.',
      },
      error: {
        pageTitle: 'Seite nicht gefunden - Bailarico',
        pageDescription: 'Seite nicht gefunden',
      },
    },

    // Navbar Menu
    navbar: {
      linkCourses: 'Kurse',
      linkPhotos: 'Fotos',
      linkContact: 'Kontakt',
      linkHomePage: 'Homepage',
    },

    // Hero
    hero: {
      // Titel (Título principal)
      title: {
        top: 'Tanzschule für',
        // Wortliste (Lista de palabras)
        middle: [
          //
          'Salsa',
          'Cha Cha Cha',
          'High Heels',
          'Urban',
        ],
        bottom: 'in Zürich',
      },
      intro: [
        // Cada linea es un parrafo:
        `*BailaRico*, deine Lieblings-Tanzschule in Zürich.`,
        `Seit über 10 Jahren bietet BailaRico Kurse für *Salsa&nbsp;On1* (Linie), *Salsa&nbsp;On2* (NY&nbsp;/&nbsp;Mambo), *Ladies&nbsp;Style*, *Urban* und *High&nbsp;Heels* an.`,
      ],
    },

    // Kurse
    courses: {
      // Titel
      title: 'Unsere *Kurse*',
      // Tabelle
      table: {
        header: {
          title: 'Kursplan',
          subtitle: 'Ab 5. Januar 2026',
        },
        levels: {
          level0: 'Einsteiger',
          level1: 'Anfänger',
          level2: 'Ab Mittelstufe',
          level3: 'Fortgeschrittene',
        },
        days: {
          monday: 'Montag',
          tuesday: 'Dienstag',
          wednesday: 'Mittwoch',
          thursday: 'Donnerstag',
          friday: 'Freitag',
          saturday: 'Samstag',
        },
        footer: {
          duration: 'Alle Kurse dauern',
          durationTime: '60 Minuten',
        },
      },
      // // Old: Kursplan (Bild)
      // courses: 'Kursplan-Jan-2023-DE.png',
      // // Old: Kursplan PDF
      // pdf: {
      //   title: 'Aktueller Kursplan',
      //   // description: 'inkl. Kursbeschreibungen und weitere Details.',
      //   button: 'PDF herunterladen',
      //   // file: 'bailarico.ch/2022-10-Kursplan-BailaRico.pdf', // Testing: PDF file
      //   file: 'kursplan-jan-2023-deutsch.pdf', // PDF file
      // },
      // Anmeldung
      registration: {
        title: 'Anmeldung',
        text: [
          //
          `Schreib uns eine Nachricht um dich anzumelden:`,
        ],
      },
      // Preise
      pricing: {
        title: 'Preise',
        text: [
          //
          `*CHF 35.-* für eine Einzelstunde.`,
          //
          `*CHF 250.-* für eine 10er Abo-Karte.<br>10er Abo ist 1 Jahr gültig. Abo-Karten sind gültig für alle Kurse!`,
          //
          `*CHF 360.-* für ein Monatsabo.<br>Zugang zu allen unseren Kursen!`,
        ],
      },
    },

    // Fotos
    photos: {
      // Titel
      title: '*Fotos* & Videos',
      controls: {
        back: 'Züruck',
        next: 'Weiter',
      },
    },

    // Social Media
    socialMedia: {
      // Titel
      title: '*Social Media*',
      // Texte
      description: [
        // Cada linea es un parrafo:
        `Folg uns auf *Instagram*, *Facebook* oder *YouTube* und werde Teil unserer Tanz-Community.`,
      ],
      //
      linkInstagram: 'https://www.instagram.com/bailarico.ch/',
      linkYoutube: 'https://www.youtube.com/channel/UCD5Ah2BGdCHVbB7bSFXzLEw',
      linkFacebook: 'https://www.facebook.com/BailaRico.ch',
    },

    // Team
    team: {
      // Titel
      title: 'Unser *Team*',
      // Team
      teamMembers: [
        {
          name: 'Victor Ortega',
          job: 'Gründer / Leiter',
          summary: [
            //
            // `Also known as "The Mambo King", is a salsa dance instructor. Torres' technique developed from various sources including Afro-Cuban son, mambo, and North American jazz dance. He is one of the more popular dancers of New York style salsa.`,
          ],
        },
        {
          name: 'Vesna Granulic',
          job: 'Salsa, Heels, Urban',
          summary: [
            //
            // `...`,
          ],
        },
        // {
        //   name: 'Muriel Lowis',
        //   job: 'Salsa, Bachata',
        //   summary: [
        //     //
        //     // `...`,
        //   ],
        // },
        // {
        //   name: '???? ????',
        //   job: 'Salsa, ????',
        //   summary: [
        //     //
        //     `...`,
        //   ],
        // },
      ],
    },

    // Kontakt
    contact: {
      // Titel
      title: '*Kontakt*',
      // Studio
      labelStudioExterior: 'Studio: Aussenansicht',
      labelStudioInterior: 'Studio: Innenansicht',
      // E-Mail
      labelEmail: 'E-Mail',
      emailAddress: 'info@bailarico.ch',
      linkEmail: 'mailto:info@bailarico.ch',
      // Telefon
      labelPhone: 'Telefon / Whatsapp',
      phoneNumber: '+41 78 714 08 63',
      linkPhone: 'tel:+41787140863',
      // Standort
      labelAddress: 'Standort',
      address: {
        streetAndNumber: 'Hohlstrasse 192',
        postcodeAndCity: '8004 Zürich',
      },
      linkGoogleMaps: 'https://goo.gl/maps/VToqL3NG343hvrfR8',
      labelSocial: 'Social Media',
      // Map button
      buttonOpenGoogleMaps: 'Google Maps öffnen',
    },

    // Footer
    footer: {
      buttonScrollToTop: 'Nach oben',
      copyright: 'BailaRico.ch',
      madeInDesktop: 'Made with 🍉 in Zürich',
      // madeInMobile: '🍉',
      linkToLegal: 'Rechtliches',
    },

    // Fehler
    error: {
      title: 'Seite nicht gefunden',
      button: 'Zur Homepage',
    },

    // Rechtliches
    legal: {
      title: 'Rechtliches',
      sections: [
        {
          title: 'Copyright',
          text: [
            `Das Copyright für sämtliche Inhalte dieser Website liegt bei BailaRico, Victor Ortega.`,
          ],
        },
        {
          title: 'Disclaimer',
          text: [
            `Alle Texte und Links wurden sorgfältig geprüft und werden laufend aktualisiert. Wir sind bemüht, richtige und vollständige Informationen auf dieser Website bereitzustellen, übernehmen aber keinerlei Verantwortung, Garantien oder Haftung dafür, dass die durch diese Website bereitgestellten Informationen, richtig, vollständig oder aktuell sind. Wir behalten uns das Recht vor, jederzeit und ohne Vorankündigung die Informationen auf dieser Website zu ändern und verpflichten uns auch nicht, die enthaltenen Informationen zu aktualisieren. Alle Links zu externen Anbietern wurden zum Zeitpunkt ihrer Aufnahme auf ihre Richtigkeit überprüft, dennoch haften wir nicht für Inhalte und Verfügbarkeit von Websites, die mittels Hyperlinks zu erreichen sind. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die durch Inhalte verknüpfter Seiten entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde. Dabei ist es gleichgültig, ob der Schaden direkter, indirekter oder finanzieller Natur ist oder ein sonstiger Schaden vorliegt, der sich aus Datenverlust, Nutzungsausfall oder anderen Gründen aller Art ergeben könnte.`,
          ],
        },
        {
          title: 'Datenschutz',
          text: [
            `Für die Sicherheit der Datenübertragung im Internet können wir keine Gewähr übernehmen, insbesondere besteht bei der Übertragung von Daten per E-Mail die Gefahr des Zugriffs durch Dritte.`,
            `Einer Nutzung der im Impressum veröffentlichten Kontaktdaten durch Dritte zu Werbezwecken wird hiermit ausdrücklich widersprochen. Der Betreiber behält sich für den Fall unverlangt zugesandter Werbe- oder Informationsmaterialien ausdrücklich rechtliche Schritte vor.`,
            `Sollten einzelne Regelungen oder Formulierungen dieses Haftungsausschlusses unwirksam sein oder werden, bleiben die übrigen Regelungen in ihrem Inhalt und ihrer Gültigkeit hiervon unberührt.`,
          ],
        },
        // {
        //   title: 'Google Analytics',
        //   text: [
        //     `Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. („Google“). Google Analytics verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Im Falle der Aktivierung der IP-Anonymisierung auf dieser Webseite, wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringenDie im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können.`,
        //     `Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren.`,
        //     `Der aktuelle Link ist https://tools.google.com/dlpage/gaoptout.`,
        //     `Google Analytics Bedingungen: https://www.google.com/analytics/terms/de.`,
        //   ],
        // },
      ],
    },
  },

  //
  //
  // Idioma: Inglés
  //
  //

  // Texts
  english: {
    // Meta tags
    meta: {
      home: {
        pageTitle: 'BailaRico - Salsa Dance School in Zurich',
        pageDescription:
          'Learn to dance Salsa in Zurich. BailaRico is a dance school offering dance classes for Salsa On1, Salsa On2 (Mambo), Cha Cha Cha, Ladies Style, Urban, and High Heels.',
      },
      error: {
        pageTitle: 'Page Not Found - Bailarico',
        pageDescription: 'Page Not Found',
      },
    },

    // Navbar Menu
    navbar: {
      linkCourses: 'Classes',
      linkPhotos: 'Photos',
      linkContact: 'Contact',
      linkHomePage: 'Home Page',
    },

    // Hero
    hero: {
      // Title (Título principal)
      title: {
        top: 'Dance Studio for',
        // Words list (Lista de palabras)
        middle: [
          //
          'Salsa',
          'Cha Cha Cha',
          'High Heels',
          'Urban',
        ],
        bottom: 'in Zurich',
      },
      intro: [
        // Cada linea es un parrafo:
        `*BailaRico*, your favorite salsa dance school in Zurich.`,
        `For over 10 years, BailaRico has offered dance classes for *Salsa*&nbsp;(On1), *Salsa&nbsp;On2* (NY&nbsp;/&nbsp;Mambo), *Ladies&nbsp;Style*, *Urban*, and *High&nbsp;Heels*.`,
      ],
    },

    // Courses
    courses: {
      // Title
      title: 'Our *Classes*',
      // Table
      table: {
        header: {
          title: 'Schedule',
          subtitle: 'From January 5, 2026',
        },
        levels: {
          level0: 'Newcomer',
          level1: 'Beginner',
          level2: 'Intermediate',
          level3: 'Advanced',
        },
        days: {
          monday: 'Monday',
          tuesday: 'Tuesday',
          wednesday: 'Wednesday',
          thursday: 'Thursday',
          friday: 'Friday',
          saturday: 'Saturday',
        },
        footer: {
          duration: 'All classes are',
          durationTime: '60 minutes',
        },
      },
      // // Old: Course Schedule (Image)
      // courses: 'Schedule-Jan-2023-EN.png',
      // // Old: Course Schedule (PDF)
      // pdf: {
      //   title: 'Current Schedule',
      //   // description: 'including class descriptions and other details.',
      //   button: 'Download PDF',
      //   // file: 'bailarico.ch/2022-10-Schedule-BailaRico.pdf', // testing: PDF file
      //   file: 'schedule-jan-2023-english.pdf', // PDF file
      // },
      // Registration
      registration: {
        title: 'Sign Up',
        text: [
          //
          `Write us a message, or send us an email:`,
        ],
      },
      // Pricing
      pricing: {
        title: 'Pricing',
        text: [
          //
          `*CHF 35.-* for a single lesson.`,
          `*CHF 250.-* for a 10-lesson Member Card.<br>Member Cards are valid for 1 year for any of our lessons!`,
          `*CHF 360.-* for a Monthly Membership.<br>Access to all our lessons!`,
        ],
      },
    },

    // Photos
    photos: {
      // Title
      title: '*Photos* & Videos',
      controls: {
        back: 'Previous',
        next: 'Next',
      },
    },

    // Social Media
    socialMedia: {
      // Title
      title: '*Social Media*',
      // Text
      description: [
        // Cada linea es un parrafo:
        `Follow us on *Instagram*, *Facebook*, or *YouTube* and become a part of our dance community!`,
      ],
      //
      linkInstagram: 'https://www.instagram.com/bailarico.ch/',
      linkYoutube: 'https://www.youtube.com/channel/UCD5Ah2BGdCHVbB7bSFXzLEw',
      linkFacebook: 'https://www.facebook.com/BailaRico.ch',
    },

    // Team
    team: {
      // Title
      title: 'Our *Team*',
      //
      teamMembers: [
        {
          name: 'Victor Ortega',
          job: 'Founder / Director',
          summary: [
            //
            // `...`,
          ],
        },
        {
          name: 'Vesna Granulic',
          job: 'Salsa, Heels, Urban',
          summary: [
            //
            // `...`,
          ],
        },
        // {
        //   name: 'Muriel Lowis',
        //   job: 'Salsa, Bachata',
        //   summary: [
        //     //
        //     // `...`,
        //   ],
        // },
        // {
        //   name: '???? ????',
        //   job: '????',
        //   summary: [
        //     //
        //     `...`,
        //   ],
        // },
      ],
    },

    // Contact
    contact: {
      // Title
      title: '*Contact*',
      // Studio
      labelStudioExterior: 'Studio: Exterior',
      labelStudioInterior: 'Studio: Interior',
      // Email
      labelEmail: 'Email',
      emailAddress: 'info@bailarico.ch',
      linkEmail:
        'mailto:info@bailarico.ch?subject=Kontaktformular%20Webseite%20bailarico.ch&body=Hi%20Victor%0D%0A%0D%0A...',
      // Phone
      labelPhone: 'Phone / Whatsapp',
      phoneNumber: '+41 78 714 08 63',
      linkPhone: 'tel:+41787140863',
      // Location
      labelAddress: 'Location',
      address: {
        streetAndNumber: 'Hohlstrasse 192',
        postcodeAndCity: '8004 Zurich',
      },
      labelSocial: 'Social Media',
      linkGoogleMaps: 'https://goo.gl/maps/VToqL3NG343hvrfR8',
      // Map button
      buttonOpenGoogleMaps: 'Open Google Maps',
    },

    // Footer
    footer: {
      buttonScrollToTop: 'Scroll to Top',
      copyright: 'BailaRico.ch',
      madeInDesktop: 'Made with 🍉 in Zurich',
      // madeInMobile: '🍉',
      linkToLegal: 'Legal',
    },

    // Error
    error: {
      title: 'Page Not Found',
      button: 'Go to home page',
    },

    // Legal
    legal: {
      title: 'Legal',
      sections: [
        {
          title: 'Copyright',
          text: [
            `The copyright for all contents of this website belongs to BailaRico, Victor Ortega.`,
          ],
        },
        {
          title: 'Disclaimer',
          text: [
            `All texts and links have been carefully checked and are constantly updated. We strive to provide accurate and complete information on this website, but do not assume any responsibility, guarantees or liability that the information provided through this website, is accurate, complete or current. We reserve the right to change the information on this website at any time without notice and make no commitment to update the information contained herein. All links to external providers were checked for accuracy at the time of their inclusion, but we are not liable for the content and availability of websites that can be reached via hyperlinks. For illegal, incorrect or incomplete contents and especially for damages caused by the contents of linked pages, the provider of the linked page is solely liable. It is irrelevant whether the damage is of a direct, indirect or financial nature or any other damage that could result from loss of data, loss of use or other reasons of any kind.`,
          ],
        },
        {
          title: 'Datenschutz',
          text: [
            `We cannot guarantee the security of data transmission on the Internet; in particular, there is a risk of access by third parties when transmitting data by e-mail.`,
            `The use of contact data published in the imprint by third parties for advertising purposes is hereby expressly prohibited. The operator expressly reserves the right to take legal action in the event of unsolicited advertising or information material being sent.`,
            `Should individual provisions or formulations of this disclaimer be or become invalid, the content and validity of the remaining provisions shall remain unaffected.`,
          ],
        },
        // {
        //   title: 'Google Analytics',
        //   text: [
        //     `This website uses Google Analytics, a web analytics service provided by Google, Inc. ("Google"). Google Analytics uses "cookies", which are text files placed on your computer, to help the website analyze how users use the site. The information generated by the cookie about your use of this website is usually transmitted to a Google server in the USA and stored there. In the event that IP anonymization is activated on this website, however, your IP address will be truncated beforehand by Google within member states of the European Union or in other contracting states to the Agreement on the European Economic Area. Only in exceptional cases will the full IP address be transmitted to a Google server in the USA and shortened there. On behalf of the operator of this website, Google will use this information for the purpose of evaluating your use of the website, compiling reports on website activity and providing other services relating to website activity and internet usage to the website operatorThe IP address transmitted by your browser as part of Google Analytics will not be merged with other data held by Google. You may refuse the use of cookies by selecting the appropriate settings on your browser, however please note that if you do this you may not be able to use the full functionality of this website.`,
        //     `You can also prevent the collection of data generated by the cookie and related to your use of the website (including your IP address) to Google and the processing of this data by Google by downloading and installing the browser plugin available under the following link.`,
        //     `The current link is https://tools.google.com/dlpage/gaoptout.`,
        //     `Google Analytics Terms: https://www.google.com/analytics/terms.`,
        //   ],
        // },
      ],
    },
  },

  //
  // Textos
  //

  // Idioma: Español
  // espanol: {},
}

export default texts
