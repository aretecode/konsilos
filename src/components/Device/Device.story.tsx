import * as React from 'react'
import styled from 'styled-components'
import { StyledDevice } from './Device'

const StyledWrap = styled.div`
  padding: 3rem;
  background: #fff;
`
const StyledScaledDevice = styled(StyledDevice)`
  margin: 5vh 5vw;
`
export default { title: 'Device' }
export const ipad = () => (
  <StyledWrap>
    <StyledScaledDevice type="ipad">
      <img
        className="device-content"
        src="https://pencamcc.sirv.com/Devices/bg-07.jpg"
      />
    </StyledScaledDevice>
  </StyledWrap>
)
export const macbook = () => (
  <StyledWrap>
    <StyledScaledDevice type="macbook">
      <img
        className="device-content"
        src="https://pencamcc.sirv.com/Devices/bg-02.jpg"
      />
    </StyledScaledDevice>
  </StyledWrap>
)
