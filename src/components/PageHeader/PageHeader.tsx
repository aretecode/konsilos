import * as React from 'react'
import styled from 'styled-components'

/**
 * @todo can use this & style if needed
 */
// import { StyledLogo } from '../Logo'

export const PageHeader = (props: {
  className?: string
  children: React.ReactNode
}) => {
  const { children, ...rest } = props
  return <h1 {...rest}>{children}</h1>
}

/**
 * @todo cleanup by removing h1, adds knowledge that it should not have
 */
export const StyledPageHeader = styled(PageHeader)`
  margin: 0 auto;
  font-size: 2rem;
  background: #f27059;
  color: #fff;
  padding: 2rem;
`
