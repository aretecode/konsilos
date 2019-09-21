import * as React from 'react'
import { useTranslation } from 'react-i18next'

/**
 * @todo i18n
 * @todo accessibility svg
 * @todo issue track
 * @todo flag icons
 */
const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  return (
    <svg
      onClick={() => i18n.changeLanguage('pt')}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      role="img"
      viewBox={`0 0 42 42`}
    >
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      <path d="M0,0 v30 h60 v-30 z" fill="#00247d" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path
        d="M0,0 L60,30 M60,0 L0,30"
        clipPath="url(#t)"
        stroke="#cf142b"
        strokeWidth="4"
      />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#cf142b" strokeWidth="6" />
    </svg>
  )
}

export { LanguageSwitcher }
