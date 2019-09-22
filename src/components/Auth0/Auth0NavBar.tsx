import * as React from 'react'
import { useAuth0 } from '../Auth0'
import { useTranslation } from 'react-i18next'

const Auth0NavBar = (props: { className?: string }) => {
  const { t } = useTranslation()
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

  return (
    <div {...props}>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>{t('nav__login')}</button>
      )}

      {isAuthenticated && (
        <button onClick={() => logout()}>{t('nav__logout')}</button>
      )}
    </div>
  )
}

export { Auth0NavBar }
