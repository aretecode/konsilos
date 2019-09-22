/**
 * @todo add dynamic `import` to load when needed
 */
import * as React from 'react'
import { BrazilFlag } from './BrazilFlag'
import { CanadaFlag } from './CanadaFlag'

export type SupportedFlagNameType = 'canada' | 'brazil'
export type FlagPropType = { flag: SupportedFlagNameType }

export const Flag = (props: FlagPropType) => {
  const { flag } = props
  if (flag === 'brazil') {
    return <BrazilFlag />
  }
  return <CanadaFlag />
}
