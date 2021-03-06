import * as React from 'react'
import styled from 'styled-components'

export const Logo = (props: Partial<React.SVGProps<SVGSVGElement>>) => (
  <svg
    version="1"
    xmlns="http://www.w3.org/2000/svg"
    width="266.667"
    height="266.667"
    viewBox="0 0 200 200"
    {...props}
  >
    <title key="title">Logo</title>
    <path d="M146.7 32.6c-.1.2-1.4.5-2.7.7-5.6 1.1-8.8 2-15.5 4.4-8.3 3.1-20.5 8.9-22.3 10.7-.8.7-2.4 4.6-3.7 8.7-1.7 5.5-2.4 6.6-2.4 4.4-.1-1.7-.4-4-.7-5.2-.6-2.2-.8-2.1-4.5 2-4.8 5.3-9.7 14.3-10.5 19.2-.3 2.1-.7 4.5-.9 5.4-.2.9.3 2.7 1 4 1.1 2.2.8 3.1-3 9-5.5 8.7-9 16.3-7.8 17.5.3.3 2.8-2.7 5.6-6.7 9.3-13.3 10.2-14.2 14.5-13.9 6.7.5 15.8-4.5 31.1-17.3l8.3-6.9-4.4-1.5-4.3-1.5 8.1-1.6c6.5-1.2 9.7-2.6 16.8-7 9.6-6 16-11.6 17-14.7 1.1-3.4-1.1-7.3-5-8.9-2.9-1.2-13.7-1.8-14.7-.8zm-4.5 13.6c-.6.7-3.4 2.6-6.4 4.1-17.3 9.1-43.2 34.1-56.5 54.7-5.3 8-5.6 7-.6-1.9 13-23.2 33-43.1 53.9-53.4 6.1-3 9-4.4 10.3-4.6.2-.1-.1.5-.7 1.1zM10.6 79.4c-3.8 3.3-4.4 4.3-2.3 4.3 7 0 23.6 6.9 33.4 13.9 12.8 9.1 31.6 30.3 40.6 45.6 6.1 10.5 2.7 1.7-4.1-10.7-12.8-23-34.6-43.9-55.7-53.4-6.9-3.1-8-3.1-11.9.3z" />
    <path d="M.3 89.7c.3.5.8 2.9 1.2 5.3.4 2.5.8 4.9.9 5.5.2.5.9 3.8 1.6 7.2l1.2 6.2 4.7.7c12.1 1.8 28.8 8.4 39.5 15.7 8.3 5.6 20.7 17.7 28.4 27.7 3.6 4.7 6.6 8.6 6.7 8.7 0 .1 4.4-2 9.6-4.7 16.9-8.7 32-11.3 49.4-8.3 9.1 1.5 21 5.2 30.4 9.4l6.4 2.9 4-4.2c2.2-2.4 6.6-7.1 9.9-10.5l5.8-6.1-2.7-2c-10-7-24.6-11.4-37.3-11.3-16.2.1-31.4 4.9-60.7 19.4l-11.1 5.4-4.3-6.1C63.5 121.2 49.1 106.1 34 97.8c-5.1-2.8-16-7-16-6.3 0 .3-.8.1-1.9-.4C13.7 89.8-.4 88.6.3 89.7z" />
  </svg>
)

export const StyledLogo = styled(Logo)`
  width: 163px;
  height: 102px;
  fill: #fff;
  position: relative;
  left: -30px;

  @media (max-width: 480px) {
    width: 80px;
    left: 0px;
  }
`
