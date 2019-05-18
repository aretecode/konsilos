import * as React from 'react'
import { createContext } from 'react'
import { URL } from './utils/url'

/**
 * could can observe the scrolling, etc
 */
export interface AppContextValueType {
  /**
   * url of the current page (_universal_)
   */
  url: URL
}

/**
 * could move to a `constants` file
 */
export const DEFAULT_URL = new URL('https://localhost')

export const AppContext = createContext<AppContextValueType>({
  url: DEFAULT_URL as any,
})

export class AppContextProvider extends React.PureComponent<{
  url: URL
}> {
  render() {
    const {url = DEFAULT_URL, children} = this.props
    const contextValue = {
      // may have rehydrated from a serialized app state
      url: typeof url === 'string' ? new URL(url) : url,
    }
    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  }
}
