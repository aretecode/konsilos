/**
 * @see https://www.apollographql.com/docs/react/advanced/boost-migration
 * @see https://github.com/bitinn/node-fetch/issues/49
 * @see https://github.com/apollographql/apollo-link/issues/83
 * @see https://github.com/github/fetch#sending-cookies
 * @see https://github.com/zeit/next.js/blob/master/examples/with-apollo/lib/init-apollo.js
 */
import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  ApolloClientOptions,
  NormalizedCacheObject,
} from 'apollo-boost'
import { InMemoryCache } from 'apollo-boost'
import { onError } from 'apollo-link-error'
import { GraphQLError } from 'graphql'
import { isEmpty, isObj } from '../utils/is'
import { EMPTY_OBJ } from '../utils/EMPTY'

const IS_BROWSER = process.browser && typeof window === 'object'

/**
 * @see apolloClient
 */
if (!process.browser) {
  // tslint:disable:no-var-requires
  (global as any).fetch = require('node-fetch')
}

let apolloClientInstance: ApolloClient<any> = undefined as any

/**
 * changed to this because of the server usage
 * if we need access to these links outside we can change this
 */
export function createInstance(
  initialState: NormalizedCacheObject = (IS_BROWSER
    ? window.__APOLLO_STATE__
    : EMPTY_OBJ) as NormalizedCacheObject,
  url?: URL
) {
  const httpLink = new ApolloLink((operation, forward) => {
    const httpLinkActual = new HttpLink({
      get uri() {
        /**
         * 1. if env is NOT `readonly`, and we pass in `url`, and we have `graphql` in params, use it
         * 2. if it's NODE_ENV `development`, use localhost:4000
         * 3. if it's the browser, use `/graphql` (_same origin_)
         * 4. use `now.sh` deployment of graphql from `env`
         */
        return process.env.READONLY !== 'true' && isObj(url) && url.searchParams.has('graphql')
          ? url.searchParams.get('graphql')!
          : process.env.NODE_ENV === 'development'
          ? `http://localhost:4000/graphql?n=${operation.operationName}`
          : process.browser
          ? '/graphql'
          : process.env.GRAPHQL_API_URL
      },

      /**
       * @@security should be same-origin in real production
       */
      credentials: 'include',
    })

    return httpLinkActual.request(operation, forward)
  })

  const logError = (error: GraphQLError): void => {
    const {message, locations, path} = error
    console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
  }

  const errorLink = onError(namedErrorResponseParams => {
    const {graphQLErrors, networkError, response} = namedErrorResponseParams
    const hasError = isObj(graphQLErrors) || !isEmpty(networkError)

    if (isObj(graphQLErrors)) {
      const list = graphQLErrors as GraphQLError[]
      list.forEach(logError)
    }
    if (!isEmpty(networkError)) {
      console.error(`[Network error]: ${networkError}`)
    }

    if (hasError && isObj(response)) {
      response.errors = undefined
    }
  })

  /**
   * @see https://github.com/apollographql/apollo-link/tree/master/packages/apollo-link-error
   */
  const consoleLink = new ApolloLink((operation, forward) => {
    console.info(`starting request for ${operation.operationName}`)

    if (forward !== undefined) {
      return forward(operation).map(data => {
        console.info(`ending request for ${operation.operationName}`)
        return data
      })
    } else {
      // tslint:disable:no-null-keyword
      return null
      // tslint:enable:no-null-keyword
    }
  })

  /**
   * @api @see https://github.com/apollographql/apollo-cache-persist#react
   * @api @see https://www.apollographql.com/docs/react/features/cache-updates.html#normalization
   */
  const inMemoryCache = new InMemoryCache()
  const cache = inMemoryCache.restore(initialState)

  /**
   * @see https://github.com/apollographql/apollo-client/issues/1419
   * @see https://github.com/apollographql/apollo-client/blob/82a846c9591bcff975cc28d3786105b80a49b4ba/src/queries/queryTransform.ts#L30
   * @see https://github.com/apollographql/apollo-client/issues/1913#issuecomment-348359030
   */
  const clientConfig: ApolloClientOptions<any> = {
    link: ApolloLink.from([consoleLink, errorLink, httpLink].filter(Boolean)),
    cache,
    ssrMode: !process.browser,
    ssrForceFetchDelay: process.browser ? 100 : undefined,
    connectToDevTools: process.browser,
  }

  const client = new ApolloClient(clientConfig)

  return client
}

export function initApolloClient(initialState?: NormalizedCacheObject, url?: URL) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return createInstance(initialState, url)
  }

  // Reuse client on the client-side
  if (apolloClientInstance === undefined) {
    apolloClientInstance = createInstance(initialState, url)
  }

  return apolloClientInstance
}
