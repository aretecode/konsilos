import * as React from 'react'
import styled from 'styled-components'

export type DevicePropTypes = {
  type?: 'macbook' | 'ipad'
  className?: string
  children: React.ReactChild
}

export const StyledDeviceScreen = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  z-index: 3;
  background: white;
  overflow: hidden;
  display: block;
  border-radius: 1px;
  box-shadow: 0 0 0 3px #111;
`
export const StyledDeviceTopBottomBar = styled.div`
  height: 3px;
  background: black;
  width: 100%;
  display: block;
`
export const StyledDeviceTopBar = styled(StyledDeviceTopBottomBar)``
export const StyledDeviceBottomBar = styled(StyledDeviceTopBottomBar)``
export const StyledDeviceCamera = styled.div``
export const StyledDeviceBase = styled.div`
  display: inline-block;
  position: relative;
  box-sizing: content-box;
`
export const BaseDevice = (props: DevicePropTypes) => {
  return (
    <StyledDeviceBase className={props.className}>
      <StyledDeviceTopBar />
      <StyledDeviceCamera />
      <StyledDeviceScreen>{props.children}</StyledDeviceScreen>
      <StyledDeviceBottomBar />
    </StyledDeviceBase>
  )
}

export const StyledAppleIPadDevice = styled(BaseDevice)`
  background: #bcbcbc;

  width: 576px;
  height: 768px;
  padding: 90px 25px;
  background: #242324;
  border-radius: 44px;
  :before {
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    position: absolute;
    content: '';
    display: block;
    top: 4px;
    left: 4px;
    border-radius: 40px;
    background: #1e1e1e;
    background: #fcfcfc;
  }

  ${StyledDeviceCamera} {
    background: #3c3d3d;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 44px;
    left: 50%;
    margin-left: -5px;
    border-radius: 100%;
  }
  ${StyledDeviceTopBar} {
    display: none;
  }
  /* using as home */
  ${StyledDeviceBottomBar} {
    background: #fcfcfc;
    box-shadow: inset 0 0 0 1px #bcbcbc;
    border-radius: 36px;
    width: 50px;
    height: 50px;
    position: absolute;
    left: 50%;
    margin-left: -25px;
    bottom: 22px;
    :after {
      width: 15px;
      height: 15px;
      margin-top: -8px;
      margin-left: -8px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      position: absolute;
      display: block;
      content: '';
      top: 50%;
      left: 50%;
    }
  }
`

export const StyledAppleMacbookDevice = styled(BaseDevice)`
  width: 960px;
  height: 600px;
  padding: 44px 44px 76px;
  margin: 0 auto;
  background: #bebebe;
  border-radius: 34px;
  :before {
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    position: absolute;
    content: '';
    display: block;
    top: 4px;
    left: 4px;
    border-radius: 30px;
    background: #1e1e1e;
  }
  ${StyledDeviceTopBar} {
    width: calc(100% + 2 * 70px);
    height: 40px;
    position: absolute;
    content: '';
    display: block;
    top: 680px;
    left: -70px;
    border-bottom-left-radius: 90px 18px;
    border-bottom-right-radius: 90px 18px;
    background: #bebebe;
    box-shadow: inset 0px -4px 13px 3px rgba(34, 34, 34, 0.6);
    :before {
      width: 100%;
      height: 24px;
      content: '';
      display: block;
      top: 0;
      left: 0;
      background: #f0f0f0;
      border-bottom: 2px solid #aaa;
      border-radius: 5px;
      position: relative;
    }
    :after {
      width: 16%;
      height: 14px;
      content: '';
      display: block;
      top: 0;
      background: #ddd;
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      border-radius: 0 0 20px 20px;
      box-shadow: inset 0px -3px 10px #999;
    }
  }
  ${StyledDeviceBottomBar} {
    background: transparent;
    width: calc(100% + 2 * 70px);
    height: 26px;
    position: absolute;
    content: '';
    display: block;
    top: 680px;
    left: -70px;
    :before,
    :after {
      height: calc(100% - 2px);
      width: 80px;
      content: '';
      display: block;
      top: 0;
      position: absolute;
    }
    :before {
      left: 0;
      background: #f0f0f0;
      background: linear-gradient(
        to right,
        #747474 0%,
        #c3c3c3 5%,
        #ebebeb 14%,
        #979797 41%,
        #f0f0f0 80%,
        #f0f0f0 100%,
        #f0f0f0 100%
      );
    }
    :after {
      right: 0;
      background: #f0f0f0;
      background: linear-gradient(
        to right,
        #f0f0f0 0%,
        #f0f0f0 0%,
        #f0f0f0 20%,
        #979797 59%,
        #ebebeb 86%,
        #c3c3c3 95%,
        #747474 100%
      );
    }
  }
  ${StyledDeviceCamera} {
    background: #3c3d3d;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 20px;
    left: 50%;
    margin-left: -5px;
    border-radius: 100%;
  }
`

/**
 * @example
 *    <Device type="ipad">eh</Device>
 *    <Device type="macbook">eh</Device>
 */
export const Device = (props: DevicePropTypes) => {
  const { type, ...remaining } = props
  if (type === 'ipad') return <StyledAppleIPadDevice {...remaining} />
  else return <StyledAppleMacbookDevice {...remaining} />
}

export const StyledDevice = styled(Device)``
export default StyledDevice
