import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          time_capsule: 'Time Capsule',
        },
      },
      pt: {
        translations: {
          time_capsule: 'Cápsula do Tempo',
        },
      },
    },
    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    // we use content as keys
    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
