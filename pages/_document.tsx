import * as React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { fromReqToUrl } from '../src/utils/fromReqToUrl'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: Required<DocumentContext>) {
    const url = fromReqToUrl(ctx.req as any)
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: React.ComponentType) => (props: {
            [key: string]: unknown
          }) => {
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
    const { title } = (this.props as any) as {
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
            href="https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wXiWtFCc.woff2"
            as="font"
            crossOrigin={'crossOrigin'}
          />
          <link
            rel="preload"
            href="https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2"
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
