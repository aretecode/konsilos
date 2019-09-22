import * as React from 'react'

export const CanadaFlag = (props: Partial<React.SVGProps<SVGSVGElement>>) => (
  <svg width="28" height="20" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <rect id="a" width="28" height="20" rx="2" />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <rect
        fill="#fff"
        stroke="#F5F5F5"
        stroke-width=".5"
        x=".25"
        y=".25"
        width="27.5"
        height="19.5"
        rx="2"
      />
      <path
        fill="#FF3131"
        mask="url(#b)"
        d="M20 0h8v20h-8zM0 0h8v20H0zM15.57 9.77c-.13.13-.2.09-.17-.1l.6-3-1.33.66-.67-2-.67 2L12 6.67l.6 3c.04.18-.04.23-.17.1l-.86-.87a.33.33 0 0 0-.48 0l-.42.43-1.34-.66L10 10l-.43.43a.34.34 0 0 0 0 .47l1.76 1.77h2l.34 2h.66l.34-2h2l1.77-1.77a.33.33 0 0 0-.01-.47L18 10l.67-1.33-1.34.66-.42-.42a.34.34 0 0 0-.48-.01l-.86.87z"
      />
    </g>
  </svg>
)
