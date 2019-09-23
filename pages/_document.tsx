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
    /**
     * @todo could move out SEO into another component
     */
    const titleText = 'Konsilos'
    const description = 'Eternize advice to your children'
    const imageUrl =
      'https://pencamcc.sirv.com/Images/docs/leaderboard.png?format=webp'
    const siteName = titleText
    const { title, url } = (this.props as any) as {
      title: string
      url: string
      [key: string]: unknown
    }
    const twitter = 'konsilos_br'
    const urlOrigin = ((url as any) as URL).origin || url
    const urlAbsolute = ((url as any) as URL).href || url

    return (
      <Html lang="en">
        <Head>
          {title}
          <meta itemProp="accessibilityControl" content="fullKeyboardControl" />
          <meta itemProp="accessibilityControl" content="fullMouseControl" />
          <meta itemProp="typicalAgeRange" content="20-60" />
          <meta property="og:type" content="website" />
          <meta
            property="og:site_name"
            content={siteName}
            key="head:og:site_name"
          />
          <meta property="og:locale" content="en_CA" key="head:og:locale" />
          <meta
            property="og:image:secure_url"
            content={imageUrl}
            key="head:og:image:secure_url"
          />
          <meta property="og:image" content={imageUrl} key="head:og:image" />
          <meta property="og:title" content={titleText} key="head:og:title" />
          <meta
            name="description"
            content={description}
            key="head:description"
          />
          <meta
            property="og:description"
            content={description}
            key="head:og:description"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:domain"
            content={urlOrigin}
            key="head:twitter:domain"
          />
          <meta
            name="twitter:creator"
            content={twitter}
            key="head:twitter:creator"
          />
          <meta name="twitter:site" content={twitter} key="head:twitter:site" />
          <meta
            name="twitter:title"
            content={titleText}
            key="head:twitter:title"
          />
          <meta
            name="twitter:description"
            content={description}
            key="head:twitter:description"
          />
          <meta
            name="twitter:image"
            content={imageUrl}
            key="head:twitter:image"
          />
          <meta
            name="twitter:url"
            content={urlAbsolute}
            key="head:twitter:url"
          />

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
