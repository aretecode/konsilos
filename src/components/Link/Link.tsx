/**
 * @note about next/link
 * @see https://raw.githubusercontent.com/zeit/next.js/canary/packages/next/client/link.js
 * ^ does not accept className
 * @see https://github.com/zeit/next.js/issues/1942#issuecomment-313925454
 *
 * @todo use Link from i18n
 */
import * as React from 'react'
import BaseLink from 'next/link'
import styled from 'styled-components'

export type LinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  to?: string
  href?: string
  rel?: string
}

export const StyledHref = styled.a``

export class DynamicLink extends React.PureComponent<
  LinkProps & { theme?: any; isNotInternal?: boolean }
> {
  render() {
    const { to, href, isNotInternal, theme, ...remainingProps } = this.props
    const toHref = (to || href || '') as string

    if (toHref.includes('http') || isNotInternal === true) {
      return <a {...remainingProps} href={toHref} />
    } else {
      const { children, ...remaining } = remainingProps
      return (
        <BaseLink href={toHref}>
          <StyledHref {...remaining} href={toHref}>
            {children}
          </StyledHref>
        </BaseLink>
      )
    }
  }
}

/**
 * @note could use styled theme
 */
export const StyledLink = styled(DynamicLink)`
  text-decoration: none;
  position: relative;

  color: var(--color-link);

  &:link,
  &:visited {
    color: var(--color-link);
  }
  &:focus {
    outline: thin dotted;
  }
  &:hover {
    color: #aaa;
  }
  &:link {
    -webkit-tap-highlight-color: rgba(102, 102, 102, 0.5);
  }
`
