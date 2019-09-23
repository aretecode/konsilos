/**
 * @todo @perf requestIdleCallback
 * @see https://auth0.com/docs/quickstart/spa/react/
 * @see https://github.com/sandrinodimattia/nextjs-auth0-example/blob/master/lib/auth0.js
 */
import React, { useState, useEffect, useContext } from 'react'
import createAuth0Client from '@auth0/auth0-spa-js'
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client'

export interface Auth0ContextType {
  isAuthenticated: boolean
  user: any
  loading: boolean
  popupOpen: boolean
  loginWithPopup(options: PopupLoginOptions): Promise<void>
  handleRedirectCallback(): Promise<RedirectLoginResult>
  getIdTokenClaims(o?: getIdTokenClaimsOptions): Promise<IdToken>
  loginWithRedirect(o: RedirectLoginOptions): Promise<void>
  getTokenSilently(o?: GetTokenSilentlyOptions): Promise<string | undefined>
  getTokenWithPopup(o?: GetTokenWithPopupOptions): Promise<string | undefined>
  logout(o?: LogoutOptions): void
}
export interface Auth0ProviderOptions {
  children: React.ReactElement
  onRedirectCallback?(result: RedirectLoginResult): void
}

const DEFAULT_REDIRECT_CALLBACK = (appState?: any) =>
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  )

export const Auth0Context = React.createContext<Auth0ContextType | null>(null)
export const useAuth0 = () => useContext(Auth0Context)!
export const Auth0Provider = ({
  children,
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions
}: Auth0ProviderOptions & Auth0ClientOptions) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState()
  const [auth0Client, setAuth0] = useState<Auth0Client>()
  const [loading, setLoading] = useState(true)
  const [popupOpen, setPopupOpen] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line max-statements
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(initOptions)
      setAuth0(auth0FromHook)

      if (
        typeof window === 'object' &&
        window.location.search.includes('code=')
      ) {
        const { appState } = await auth0FromHook.handleRedirectCallback()
        onRedirectCallback(appState)
      }

      const isAuthenticated = await auth0FromHook.isAuthenticated()

      setIsAuthenticated(isAuthenticated)

      /**
       * @note this block was changed, the code that came with the starter
       *       did not work, so this is connected to fetch user from /user
       *       otherwise, it falls back to default
       */
      if (!user) {
        const json = await fetch(window.location.origin + '/user')
          .then(x => x.json())
          .catch(errror => {
            // ignore
          })
        if (json != null && Object.keys(json).length > 0) {
          setIsAuthenticated(true)
          setUser(json)
        }
        // fallback
        else if (isAuthenticated) {
          const fetchedUser = await auth0FromHook.getUser()
          if (fetchedUser) {
            setUser(fetchedUser)
          }
        }
      }

      setLoading(false)
    }
    initAuth0()
    // eslint-disable-next-line
  }, [])

  const loginWithPopup = async (opts: PopupLoginOptions) => {
    setPopupOpen(true)
    try {
      await auth0Client!.loginWithPopup(opts)
    } catch (error) {
      console.error(error)
    } finally {
      setPopupOpen(false)
    }
    const user = await auth0Client!.getUser()
    setUser(user)
    setIsAuthenticated(true)
  }

  const handleRedirectCallback = async () => {
    setLoading(true)
    const result = await auth0Client!.handleRedirectCallback()
    const user = await auth0Client!.getUser()
    setLoading(false)
    setIsAuthenticated(true)
    setUser(user)
    return result
  }

  const contextValue = {
    isAuthenticated,
    user,
    loading,
    popupOpen,
    loginWithPopup,
    handleRedirectCallback,
    getIdTokenClaims: (opts: getIdTokenClaimsOptions | undefined) =>
      auth0Client!.getIdTokenClaims(opts),
    loginWithRedirect: (opts: RedirectLoginOptions) =>
      auth0Client!.loginWithRedirect(opts),
    getTokenSilently: (opts: GetTokenSilentlyOptions | undefined) =>
      auth0Client!.getTokenSilently(opts),
    getTokenWithPopup: (opts: GetTokenWithPopupOptions | undefined) =>
      auth0Client!.getTokenWithPopup(opts),
    logout: (opts: LogoutOptions | undefined) => auth0Client!.logout(opts),
  }

  return (
    <Auth0Context.Provider value={contextValue}>
      {children}
    </Auth0Context.Provider>
  )
}
