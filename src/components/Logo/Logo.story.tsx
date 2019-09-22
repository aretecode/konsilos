import * as React from 'react'
import styled from 'styled-components'
import { Logo } from './Logo'

const StyledLogo = styled(Logo)`
  width: 100px;
  height: 100px;
  fill: var(--color-blue);
`

export default { title: 'Logo' }
export const styledLogo = () => <StyledLogo />
export const normal = () => <Logo />
