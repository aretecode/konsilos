import * as React from 'react'
import styled from 'styled-components'
import { ScribeIcon } from './ScribeIcon'

const StyledScribeIcon = styled(ScribeIcon)`
  width: 100px;
  height: 100px;
  fill: var(--color-blue);
`

export default { title: 'ScribeIcon' }
export const styledIcon = () => <StyledScribeIcon />
export const hugeIcon = () => <ScribeIcon />
