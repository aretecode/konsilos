import * as React from 'react'
import styled from 'styled-components'
import { AddFamily } from './AddFamily'

const StyledAddFamily = styled(AddFamily)`
  padding: 5rem;
`
export default { title: 'AddFamily' }

export const styledAdd = () => <StyledAddFamily />
