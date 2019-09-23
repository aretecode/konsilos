import * as React from 'react'

export const ScribeIcon = (props: Partial<React.SVGProps<SVGSVGElement>>) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title key="title">Scribe/edit icon</title>
      <g fill="none" fillRule="evenodd">
        <path
          d="M12.75 13.48l1.74-.79s0-3.7 4.08-3.7c2 0 3.64.36 5.07 0 0 0-2.03 4.31-4.93 4.68 0 0-3.15.55-4.22-.98"
          stroke="#27C1FC"
          strokeWidth=".72"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g fill="#27C1FC" fillRule="nonzero">
          <path d="M18.71 13.67s-.35.06-.85.08l.02 3.77h.84l-.01-3.85z" />
          <path d="M5.74 19.1c0 .66-.07.97-.74.97h-.04c-.7 0-1.16-.56-1.16-1.25V3.76c0-.46-.17-.9-.44-1.24H16.6c.7 0 1.27.56 1.27 1.25v5.27c.23-.03.46-.04.71-.04h.14V3.76a2.1 2.1 0 0 0-2.12-2.08H1.91C.74 1.68.03 2.62.03 3.76v1.76h2.92v13.3c0 1.14.83 2.07 1.76 2.08l12.76.82c1.4 0 2.36-1.05 2.36-2.2v-2.08l-14.09.12v1.54zM2.94 4.81H.89V3.77c0-.7.33-1.25 1.03-1.25s1.04.56 1.04 1.24v1.05zm3.65 14.3v-.72l12.4-.11v1.24c0 .7-.58 1.37-1.28 1.37l-11.28-.82c.25-.34.16-.52.16-.97z" />
        </g>
        <path
          d="M13.51 6.36H5.95a.54.54 0 0 1-.54-.54c0-.3.24-.54.54-.54h7.56a.54.54 0 0 1 0 1.08zM13.51 9.26H5.95a.54.54 0 0 1-.54-.54c0-.3.24-.54.54-.54h7.56c.3 0 .54.25.54.54 0 .3-.24.54-.54.54zM10.02 12.16H5.95a.54.54 0 0 1-.54-.54c0-.3.24-.54.54-.54h4.07c.3 0 .54.25.54.54 0 .3-.24.54-.54.54z"
          fill="#27C1FC"
          fillRule="nonzero"
        />
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
}
