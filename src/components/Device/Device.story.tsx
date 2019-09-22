import * as React from 'react'
import styled from 'styled-components'
import { StyledDevice } from './Device'
const StyledScaledDevice = styled(StyledDevice)`
  margin: 5vh 5vw;
`
export default { title: 'Device' }
export const ipad = () => (
  <StyledScaledDevice type="ipad">
    <img
      className="device-content"
      src="https://pencamcc.sirv.com/Devices/bg-07.jpg"
    />
  </StyledScaledDevice>
)
export const macbook = () => (
  <StyledScaledDevice type="macbook">
    <img
      className="device-content"
      src="https://pencamcc.sirv.com/Devices/bg-02.jpg"
    />
  </StyledScaledDevice>
)
