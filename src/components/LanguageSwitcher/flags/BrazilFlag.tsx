import * as React from 'react'

export const BrazilFlag = (props: Partial<React.SVGProps<SVGSVGElement>>) => (
  <svg width="28" height="20" {...props}>
    <defs>
      <rect id="a" width="28" height="20" rx="2" />
      <circle id="c" cx="4.67" cy="4.67" r="4.67" />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <use fill="#FFF" xlinkHref="#a" />
      <path fill="#05AB41" mask="url(#b)" d="M0 0h28v20H0z" />
      <path
        d="M3.23 10.36c-.31-.2-.3-.53 0-.72l10.2-6.61c.32-.2.83-.2 1.13 0l10.21 6.6c.31.2.3.54 0 .73l-10.2 6.61c-.32.2-.83.2-1.13 0l-10.21-6.6z"
        fill="#FDD216"
        mask="url(#b)"
      />
      <g mask="url(#b)">
        <g transform="translate(9.33 5.33)">
          <mask id="d" fill="#fff">
            <use xlinkHref="#c" />
          </mask>
          <use fill="#053087" xlinkHref="#c" />
          <path
            d="M-.67 4c.67-.67 3.08-.35 5.34 0 2.25.35 4.67 1.34 5.33 2"
            stroke="#FFF"
            stroke-width="1.33"
            stroke-linecap="square"
            mask="url(#d)"
            transform="rotate(6 4.67 4.8)"
          />
        </g>
      </g>
    </g>
  </svg>
)
