import * as React from 'react'
import styled from 'styled-components'
import { StyledLink } from '../Link'

const StyledFooter = styled.footer`
  border-top: 1px solid #757575;
  text-align: center;
`
const StyledFooterNav = styled.nav``

export const Footer = (props: {}) => {
  return (
    <StyledFooter>
      <StyledFooterNav>
        <ul>
          <li>
            {process.env.NODE_ENV === 'production' && (
              <StyledLink href="/auth/login">Login</StyledLink>
            )}
          </li>
          <li>
            <StyledLink href="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink href="/family">Family</StyledLink>
          </li>
          <li>
            <StyledLink href="/advice">Advice</StyledLink>
          </li>
        </ul>
      </StyledFooterNav>
      <p>
        <span>©{new Date().getFullYear()}</span>{' '}
        <span>Konsilos - All rights reserved.</span>
      </p>
    </StyledFooter>
  )
}
