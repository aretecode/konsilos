/**
 * @todo add dynamic `import` to load when needed
 */
import * as React from 'react'
import styled from 'styled-components'
import { BrazilFlag } from './BrazilFlag'
import { CanadaFlag } from './CanadaFlag'

export type SupportedFlagNameType = 'canada' | 'brazil'
export type FlagPropType = { flag: SupportedFlagNameType } & Partial<
  React.SVGProps<SVGSVGElement>
>

export const Flag = (props: FlagPropType) => {
  const { flag, ...rest } = props
  if (flag === 'brazil') {
    return <BrazilFlag {...rest} />
  }
  return <CanadaFlag {...rest} />
}

// (28x20) each * 2
export const StyledFlag = styled(Flag)`
  width: 56px;
  height: 40px;
`
