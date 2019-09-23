/**
 * @see https://react.i18next.com/latest/using-with-hooks
 * @see https://github.com/isaachinman/next-i18next
 */
import NextI18Next from 'next-i18next'
import { initReactI18next } from 'react-i18next'

const NextI18NextInstance = new NextI18Next({
  browserLanguageDetection: true,
  use: [initReactI18next],
  defaultLanguage: 'en',
  otherLanguages: ['pt'],
  lng: 'en',
  fallbackLng: 'en',
  debug: false,

  localeSubpaths: {
    en: 'en',
    pt: 'pt',
  },

  /**
   * @see https://github.com/isaachinman/next-i18next/issues/381
   * @todo @see https://github.com/isaachinman/next-i18next#4-declaring-namespace-dependencies
   * @description have a common namespace used around the full app
   */

  ns: ['translations'],
  defaultNS: 'translations',

  // we use content as keys
  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
})

export const {
  appWithTranslation,
  i18n,
  withTranslation,
  useTranslation,
} = NextI18NextInstance

if (typeof window === 'object') {
  ;(window as any).NextI18NextInstance = NextI18NextInstance
}
