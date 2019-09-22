import * as React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  border-top: 1px solid #757575;
  text-align: center;
`

export const Footer = (props: {}) => {
  return (
    <StyledFooter>
      <p>
        <span>©{new Date().getFullYear()}</span>{' '}
        <span>Konsilos - All rights reserved.</span>
      </p>
    </StyledFooter>
  )
}
