/**
 * @todo convert to styled
 */
import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

export type DevicePropType = {
  type?: 'macbook' | 'ipad'
  className?: string
  children: React.ReactChild
} & Partial<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>

const DevicesStyles = createGlobalStyle`
  :root {
    --size-divisor: 1;
  }

  @media (max-width: 1200px) {
    :root {
      --size-divisor: 1.3;
    }
  }

  @media (max-width: 1024px) {
    :root {
      --size-divisor: 1.75;
    }
  }

  @media (max-width: 784px) {
    :root {
      --size-divisor: 2;
    }
  }

  @media (max-width: 500px) {
    :root {
      --size-divisor: 2.5;
    }
  }

  .device,
  .device::before,
  .device::after,
  .device *,
  .device *::before,
  .device *::after {
    box-sizing: border-box;
    display: block;
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .device {
    position: relative;
    transform: scale(1);
    z-index: 1;
  }

  .device .device-frame {
    z-index: 1;
  }

  .device .device-content {
    background-position: center center;
    background-size: cover;
    object-fit: cover;
    position: relative;
  }
`

const DeviceMacbookStyle = createGlobalStyle`
  :root {
    --macbook-pro-width: 740px;
    --macbook-pro-height: 444px;
    --macbook-pro-screen-height: 428px;
    --macbook-pro-screen-width: 614px;
    --macbook-pro-device-frame-width: 610px;
  }

  .device-macbook-pro {
    height: calc(var(--macbook-pro-height) / var(--size-divisor));
    width: calc(var(--macbook-pro-width) / var(--size-divisor));
  }

  .device-macbook-pro .device-frame {
    background: #0d0d0d;
    border-radius: calc(20px / var(--size-divisor));
    box-shadow: inset 0 0 0 2px #c8cacb;
    margin: 0 auto;
    position: relative;
    height: calc(var(--macbook-pro-screen-height) / var(--size-divisor));
    width: calc(var(--macbook-pro-screen-width) / var(--size-divisor));
    padding: calc(29px / var(--size-divisor)) calc(19px / var(--size-divisor)) calc(39px / var(--size-divisor)) calc(19px / var(--size-divisor));
  }

  .device-macbook-pro .device-frame::after {
    background: #272626;
    border-radius: 0 0 calc(20px / var(--size-divisor)) calc(20px / var(--size-divisor));
    bottom: calc(2px / var(--size-divisor));
    left: 2px;
    position: absolute;
    content: "";
    width: calc(var(--macbook-pro-device-frame-width) / var(--size-divisor));
    height: calc(26px / var(--size-divisor));
  }

  @media (max-width: 1024px) {
    .device-macbook-pro .device-frame::after {
      width: calc(604px / var(--size-divisor));
    }
  }

  .device-macbook-pro .device-frame::before {
    color: #c8cacb;
    content: "MacBook Pro";
    left: 50%;
    position: absolute;
    text-align: center;
    z-index: 1;
    font-size: calc(12px / var(--size-divisor));
    bottom: calc(10px / var(--size-divisor));
    height: calc(16px / var(--size-divisor));
    line-height: calc(16px / var(--size-divisor));
    margin-left: calc(-100px / var(--size-divisor));
    width: calc(200px / var(--size-divisor));
  }

  .device-macbook-pro .device-content {
    border: 2px solid #121212;
    border-radius: 2px;
    height: calc(360px / var(--size-divisor));
    width: calc(576px / var(--size-divisor));
  }

  .device-macbook-pro .device-power {
    background: #e2e3e4;
    border: solid #d5d6d8;
    border-radius: 2px 2px 0 0;
    border-width: 2px 4px 0 4px;
    position: relative;
    z-index: 9;

    height: calc(14px / var(--size-divisor));
    margin-top: calc(-10px / var(--size-divisor));
    width: calc(740px / var(--size-divisor));
  }

  .device-macbook-pro .device-power::after,
  .device-macbook-pro .device-power::before {
    content: "";
    position: absolute;
  }

  .device-macbook-pro .device-power::after {
    background: #d5d6d8;
    border-radius: 0 0 10px 10px;
    box-shadow: inset 0 0 4px 2px #babdbf;

    height: calc(10px / var(--size-divisor));
    width: calc(120px / var(--size-divisor));
    margin-left: calc(-60px / var(--size-divisor));
    left: 50%;
    top: -2px;
  }

  .device-macbook-pro .device-power::before {
    background: #a0a3a7;
    border-radius: 0 0 calc(180px / var(--size-divisor)) calc(180px / var(--size-divisor))/ 0 0 calc(12px / var(--size-divisor)) calc(12px / var(--size-divisor));
    box-shadow: inset 0 calc(-2 / var(--size-divisor)) calc(6px / var(--size-divisor)) 0 #474a4d;
    margin: 0 auto;

    top: calc(10px / var(--size-divisor));
    left: -4px;
    height: calc(12px / var(--size-divisor));
    margin: 0 auto;
    width: calc(740px / var(--size-divisor));
  }

  .device-macbook-pro.device-spacegray .device-frame {
    box-shadow: inset 0 0 0 2px #767a7d;
  }

  .device-macbook-pro.device-spacegray .device-power {
    background: #909496;
    border-color: #767a7d;
  }

  .device-macbook-pro.device-spacegray .device-power::after {
    background: #83878a;
    box-shadow: inset 0 0 calc(4px / var(--size-divisor)) calc(2px / var(--size-divisor)) #6a6d70;
  }

  .device-macbook-pro.device-spacegray .device-power::before {
    background: #515456;
    box-shadow: inset 0 calc(-2px / var(--size-divisor)) calc(6px / var(--size-divisor)) 0 black;
  }
  `

const DeviceIpadStyle = createGlobalStyle`
  :root {
    --ipad-height: 804px;
    --ipad-width: 560px;
  }

 .device-ipad-pro {
   height: calc(var(--ipad-height) / var(--size-divisor));
   width: calc(var(--ipad-width) / var(--size-divisor));
 }

 .device-ipad-pro .device-frame {
   background: #fff;
   border-radius: 38px;
   box-shadow: inset 0 0 0 2px #c8cacb, inset 0 0 0 6px #e2e3e4;
   height: calc(var(--ipad-height) / var(--size-divisor));
   width: calc(var(--ipad-width) / var(--size-divisor));
   padding: calc(62px / var(--size-divisor)) calc(25px / var(--size-divisor));
 }

 .device-ipad-pro .device-content {
   border: 2px solid #222;
   border-radius: 2px;
   height: calc(680px / var(--size-divisor));
   width: calc(510px / var(--size-divisor));
 }

 @media (max-width: 767px) {
   .device-ipad-pro .device-content {
     padding: 0.5rem 1rem;
     background-color: transparent;
   }
 }

 .device-ipad-pro .device-header {
   border: 2px solid #c8cacb;
   border-radius: 50%;
   left: 50%;
   bottom: calc(17px / var(--size-divisor));
   height: calc(34px / var(--size-divisor));
   margin-left: calc(-17px / var(--size-divisor));
   width: calc(34px / var(--size-divisor));
   position: absolute;
 }

 @media (max-width: 767px) {
   .device-ipad-pro .device-header {
     bottom: calc(34px / var(--size-divisor));
   }
 }

 .device-ipad-pro .device-sensors {
   background: #666;
   border-radius: 50%;
   left: 50%;
   position: absolute;
   margin-left: calc(-5px / var(--size-divisor));
   margin-top: calc(-5px / var(--size-divisor));
   top: calc(34px / var(--size-divisor));
   height: calc(10px / var(--size-divisor));
   width: calc(10px / var(--size-divisor));
 }

 .device-ipad-pro.device-spacegray .device-frame {
   background: #222;
   box-shadow: inset 0 0 0 2px #818187, inset 0 0 0 6px #9b9ba0;
 }

 .device-ipad-pro.device-spacegray .device-header {
   border-color: #818187;
 }
`

const DeviceIpad = (props: DevicePropType) => {
  const { children, className = '', ...rest } = props
  return (
    <>
      <DevicesStyles />
      <DeviceIpadStyle />
      <div
        className={`device device-ipad-pro device-spacegray ${className}`}
        {...rest}
      >
        <div className="device-frame">{children}</div>
        <div className="device-stripe"></div>
        <div className="device-header"></div>
        <div className="device-sensors"></div>
        <div className="device-btns"></div>
        <div className="device-power"></div>
      </div>
    </>
  )
}

const DeviceMacbook = (props: any) => {
  const { children, className = '', ...rest } = props
  return (
    <>
      <DevicesStyles />
      <DeviceMacbookStyle />
      <div
        className={`device device-macbook-pro device-spacegray ${className}`}
        {...rest}
      >
        <div className="device-frame">{children}</div>
        <div className="device-stripe"></div>
        <div className="device-header"></div>
        <div className="device-sensors"></div>
        <div className="device-btns"></div>
        <div className="device-power"></div>
      </div>
    </>
  )
}

/**
 * @example
 *    <Device type="ipad">eh</Device>
 *    <Device type="macbook">eh</Device>
 */
export const Device = (props: DevicePropType) => {
  const { type, ...remaining } = props
  if (type === 'ipad') {
    return <DeviceIpad {...remaining} />
  } else {
    return <DeviceMacbook {...remaining} />
  }
}

export const StyledDevice = styled(Device)``
export default StyledDevice
