import * as React from 'react'
import styled from 'styled-components'
import { AddAdvice } from './AddAdvice'

const StyledAddAdvice = styled(AddAdvice)`
  padding: 5rem;
`
export default { title: 'AddAdvice' }

export const styledAdd = () => <StyledAddAdvice />
