import * as React from 'react'

export const BrazilFlag = (props: Partial<React.SVGProps<SVGSVGElement>>) => (
  <svg viewBox="0 0 28 20" role="img" {...props}>
    <title key="title">Brazil flag</title>
    <defs>
      <rect id="e" width="28" height="20" rx="2" />
      <circle id="c" cx="4.67" cy="4.67" r="4.67" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="f" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <use fill="#FFF" xlinkHref="#e" />
      <path fill="#05AB41" mask="url(#f)" d="M0 0h28v20H0z" />
      <path
        d="M3.23 10.36c-.31-.2-.3-.53 0-.72l10.2-6.61c.32-.2.83-.2 1.13 0l10.21 6.6c.31.2.3.54 0 .73l-10.2 6.61c-.32.2-.83.2-1.13 0l-10.21-6.6z"
        fill="#FDD216"
        mask="url(#f)"
      />
      <g mask="url(#f)">
        <g transform="translate(9.33 5.33)">
          <mask id="d" fill="#fff">
            <use xlinkHref="#c" />
          </mask>
          <use fill="#053087" xlinkHref="#c" />
          <path
            d="M-.67 4c.67-.67 3.08-.35 5.34 0 2.25.35 4.67 1.34 5.33 2"
            stroke="#FFF"
            strokeWidth="1.33"
            strokeLinecap="square"
            mask="url(#d)"
            transform="rotate(6 4.67 4.8)"
          />
        </g>
      </g>
    </g>
  </svg>
)
