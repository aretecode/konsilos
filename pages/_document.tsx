import * as React from 'react'
import Document, { Html, Head, Main, NextScript, NextDocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { fromReqToUrl } from '../src/utils/fromReqToUrl'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: Required<NextDocumentContext>) {
    const url = fromReqToUrl(ctx.req as any)
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: React.ComponentType) => (props: {[key: string]: unknown}) => {
            return sheet.collectStyles(<App {...props} />)
          },
        })

      const initialProps = await Document.getInitialProps(ctx)
      const styleElements = sheet.getStyleElement()

      return {
        url,
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {styleElements}
          </>
        ),
      }
      /* eslint-enable */
    } finally {
      sheet.seal()
    }
  }

  render() {
    const {title, url, ...remainingProps} = (this.props as any) as {
      title: string
      url: string
      [key: string]: unknown
    }

    return (
      <Html lang="en">
        <Head>
          {title}
          <link rel="dns-prefetch" href="//fonts.gstatic.com/" />
          <link rel="preconnect" href="//fonts.gstatic.com/" />
          <link
            rel="preload"
            href="https://fonts.gstatic.com/s/roboto/v19/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2"
            as="font"
            crossOrigin={'crossOrigin'}
          />
          <link
            rel="preload"
            href="https://fonts.gstatic.com/s/roboto/v19/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2"
            as="font"
            crossOrigin={'crossOrigin'}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
