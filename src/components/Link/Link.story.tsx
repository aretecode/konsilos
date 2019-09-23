import * as React from 'react'
import { StyledLink } from './Link'

export default { title: 'Link' }
export const internal = () => <StyledLink to="/eh">eh</StyledLink>
export const external = () => (
  <StyledLink to="https://google.com">google.com</StyledLink>
)
