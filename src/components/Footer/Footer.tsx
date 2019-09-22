import * as React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { StyledLink } from '../Link'

const StyledFooter = styled.footer`
  text-align: center;
  display: flex;
  align-items: center;
  height: 5rem;
  max-width: calc(100% - 15%);
  margin: auto;

  p {
    margin: 0;
    font-size: 0.8rem;
    font-family: 'Lato';
    color: grey;
    width: 50%;
    text-align: right;
  }
`
const StyledFooterNav = styled.nav`
  width: 50%;
  ul {
    padding: 0;
    margin: 0;
    display: flex;
  }

  li {
    color: grey;
  }

  a {
    font-family: 'Lato';
    letter-spacing: 0;
    padding-right: 1rem;
    text-decoration: underline;
  }
`

export const Footer = (props: {}) => {
  const { t } = useTranslation()
  return (
    <StyledFooter>
      <StyledFooterNav>
        <ul>
          <li>
            {process.env.NODE_ENV === 'production' && (
              <StyledLink href="/auth/login" isNotInternal={true}>
                {t('nav__login')}
              </StyledLink>
            )}
          </li>
          <li>
            <StyledLink href="/">{t('nav__home')}</StyledLink>
          </li>
          <li>
            <StyledLink href="/family">{t('nav__family')}</StyledLink>
          </li>
          <li>
            <StyledLink href="/advice">{t('nav__advice')}</StyledLink>
          </li>
        </ul>
      </StyledFooterNav>
      <p>
        <span>© {new Date().getFullYear()}</span>{' '}
        <span>Konsilos - {t('copyright')}.</span>
      </p>
    </StyledFooter>
  )
}
