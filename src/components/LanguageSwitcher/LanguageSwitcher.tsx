/**
 * @todo could use a select dropdown, but wanted simplest accessibility
 * @see https://www.w3.org/TR/wai-aria-1.0/states_and_properties#aria-hidden
 * @see https://www.w3.org/TR/wai-aria-1.0/states_and_properties#aria-expanded
 * @see https://www.heydonworks.com/article/aria-controls-is-poop
 * @todo need ada audit to check focus trap
 * @todo could do much better perf here
 */
import * as React from 'react'
import styled, { css } from 'styled-components'
import i18n from '../../i18n'
import { StyledFlag, SupportedFlagNameType } from './flags/Flag'
import { useTranslation } from 'react-i18next'

const StyledLanguageSwitcherArea = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  ${(props: { hidden: boolean }) =>
    props.hidden === false &&
    css`
      display: none;
    `}
`
const LanguageSwitcherWrap = styled.aside`
  position: relative;
  z-index: 1;
  margin-left: 0.5rem;

  > button {
    display: block;
    width: 56px;
    height: 40px;
  }
`

const LANGUAGE_LIST: ReadonlyArray<SupportedFlagNameType> = Object.freeze([
  'brazil',
  'canada',
])
const languageListSorted = (activeName: SupportedFlagNameType) => {
  const isNotActiveFlag = (x: SupportedFlagNameType) => x !== activeName
  return [activeName, ...LANGUAGE_LIST.filter(isNotActiveFlag)]
}

const LanguageSwitcher = (props: { className?: string }) => {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = React.useState(false)
  const [activeFlag, setActiveFlag] = React.useState<SupportedFlagNameType>(
    'canada'
  )
  const createFlagWithHandler = (name: SupportedFlagNameType) => {
    const handleSelectLanguage = () => {
      const shortName = name === 'brazil' ? 'pt' : 'en'
      i18n.changeLanguage(shortName)
      setActiveFlag(name)
      setIsVisible(false)
    }
    return (
      <i
        onClick={handleSelectLanguage}
        key={name}
        title={`select language of ${name}`}
      >
        <StyledFlag flag={name} />
      </i>
    )
  }
  const handleLanguageToggleClick = () => {
    setIsVisible(!isVisible)
  }

  const languageList = languageListSorted(activeFlag)

  return (
    <>
      <LanguageSwitcherWrap aria-expanded={isVisible} {...props}>
        <button
          key="languageButton"
          onClick={handleLanguageToggleClick}
          aria-label={t('label__change_language')}
        >
          <StyledFlag flag={activeFlag} />
        </button>

        <StyledLanguageSwitcherArea
          key="languageSwitcherArea"
          hidden={isVisible}
        >
          {languageList.map(createFlagWithHandler)}
        </StyledLanguageSwitcherArea>
      </LanguageSwitcherWrap>
    </>
  )
}

export { LanguageSwitcher }
