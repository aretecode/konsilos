import App, { AppContext } from 'next/app'
import Head from 'next/head'
import { ApolloClient } from 'apollo-boost'
import * as React from 'react'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import { AppContextProvider } from '../src/AppContext'
import { Footer } from '../src/components/Footer'
import { Auth0Provider } from '../src/components/Auth0'
import { KonsilosContextProvider } from '../src/features/KonsilosContext'
import { initApolloClient } from '../src/graphql/apolloClient'
import { fromReqToUrl } from '../src/utils/fromReqToUrl'
import { AppStyles, BelowTheFoldStyles } from '../src/AppStyles'
import { UnknownObj } from '../src/typings'
import '../src/i18n'

export class InnerApp extends React.PureComponent<{
  apolloClientState?: UnknownObj
  apolloClient?: ApolloClient<any>
  url: URL
}> {
  render() {
    const { apolloClient, apolloClientState, url, children } = this.props

    return (
      <AppContextProvider url={url}>
        <ApolloProvider
          client={
            apolloClient || initApolloClient(apolloClientState as any, url)
          }
        >
          <React.StrictMode>
            <AppStyles />
            <Auth0Provider
              domain={process.env.CLIENT_AUTH0_DOMAIN!}
              client_id={process.env.CLIENT_AUTH0_CLIENT_ID!}
              redirect_uri={
                process.browser ? window.location.origin + '/auth/callback' : ''
              }
            >
              <KonsilosContextProvider>{children}</KonsilosContextProvider>
            </Auth0Provider>
            <BelowTheFoldStyles />
          </React.StrictMode>
        </ApolloProvider>
      </AppContextProvider>
    )
  }
}

export default class MyApp extends App<{
  /** these come from getInitialProps */
  apolloClientState?: UnknownObj
  apolloClient?: ApolloClient<any>
  url: URL
}> {
  static async getInitialProps(appContext: AppContext) {
    const { Component, ctx } = appContext
    const url = fromReqToUrl(ctx.req as any)
    const pageProps = {}

    let appProps = {} as any
    if (App.getInitialProps) {
      appProps = await App.getInitialProps(appContext)
    }

    const apolloClient = initApolloClient(undefined, url)

    if (!process.browser) {
      console.debug('[_app] starting ssr (server)')

      try {
        /**
         * @description Run all GraphQL queries
         * @description ideally we would combine this into a single tree walking
         *              to get other data needed in ssr to rehydrate from
         * @see https://github.com/apollographql/react-apollo/blob/master/src/getDataFromTree.ts
         * @see https://github.com/apollographql/react-apollo/blob/master/src/Query.tsx#L164
         */
        await getDataFromTree(
          <InnerApp apolloClient={apolloClient} url={url}>
            <Component {...appProps} />
          </InnerApp>
        )
      } catch (error) {
        /**
         * Prevent Apollo Client GraphQL errors from crashing SSR.
         * Handle them in components via the data.error prop:
         * @see https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
         */
        console.error('Error while running `getDataFromTree`', error)
      }

      /**
       * getDataFromTree does not call componentWillUnmount
       * head side effect therefore need to be cleared manually
       */
      Head.rewind()
    } else {
      console.debug('[_app] starting ssr (browser, rehydrate)')
    }

    // Extract query data from the Apollo store
    const apolloClientState = apolloClient.cache.extract()

    console.debug('[_app] done ssr')

    return {
      ...appProps,
      pageProps,
      url,
      apolloClientState,
    } as ReturnType<typeof App.getInitialProps> & {
      apolloState: UnknownObj
    }
  }

  render() {
    const { Component, pageProps, apolloClientState, url } = this.props

    return (
      <InnerApp apolloClientState={apolloClientState} url={url}>
        <Component {...pageProps} />
        <Footer />
      </InnerApp>
    )
  }
}
