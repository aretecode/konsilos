import * as React from 'react'
import styled from 'styled-components'
import { StyledDevice } from './Device'
const StyledScaledDevice = styled(StyledDevice)`
  margin: 10vh 10vw 25vw 10vh;
  transform: scale(0.5);
  transform-origin: 0 0;
`
export default { title: 'Device' }
export const ipad = () => (
  <StyledScaledDevice type="ipad">eh</StyledScaledDevice>
)
export const macbook = () => (
  <StyledScaledDevice type="macbook">eh</StyledScaledDevice>
)
