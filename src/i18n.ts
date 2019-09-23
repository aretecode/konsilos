/**
 * @see https://github.com/isaachinman/next-i18next/issues/374
 * @see https://hyperion.alpha.spectrum.chat/zeit/now/cannot-deploy-next-i18next-example~c85148d4-a18b-49a8-8a53-8d94c77b04ae
 * @see https://react.i18next.com/latest/using-with-hooks
 * @see https://github.com/isaachinman/next-i18next
 */
import i18n from 'i18next'
import {
  initReactI18next,
  useTranslation,
  I18nextProvider,
} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from '../static/locales/en/translations.json'
import pt from '../static/locales/pt/translations.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translation: en,
      },
      pt: {
        translation: pt,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translation'],
    defaultNS: 'translation',

    // we use content as keys
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  })

export { i18n, useTranslation, I18nextProvider }
