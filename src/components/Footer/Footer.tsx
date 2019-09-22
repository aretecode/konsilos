import * as React from 'react'
import styled from 'styled-components'
import { StyledLink } from '../Link'

const StyledFooter = styled.footer`
  text-align: center;
  display: flex;
  align-items: center;
  height: 5rem;
  max-width: calc(100% - 15%);
  margin: auto;

  p {
    margin: 0;
    font-size: 0.8rem;
    font-family: 'Lato';
    color: grey;
    width: 50%;
    text-align: right;
  }
`
const StyledFooterNav = styled.nav`
  width: 50%;
  ul {
    padding: 0;
    margin: 0;
    display: flex;
  }

  li {
    color: grey;
  }

  a {
    font-family: 'Lato';
    letter-spacing: 0;
    padding-right: 1rem;
    text-decoration: underline;
  }
`

export const Footer = (props: {}) => {
  return (
    <StyledFooter>
      <StyledFooterNav>
        <ul>
          <li>
            {process.env.NODE_ENV === 'production' && (
              <StyledLink href="/auth/login" isNotInternal={true}>
                Login
              </StyledLink>
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
