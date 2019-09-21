import * as React from 'react'
import { DEFAULT_ADVICE_LIST } from '../../constants'
import { AdviceItemType } from '../../typings'

export function useAdviceState(): [
  AdviceItemType[],
  (list: AdviceItemType[]) => void
] {
  const [adviceList, updateAdviceList] = React.useState(DEFAULT_ADVICE_LIST)
  return [adviceList, updateAdviceList]
}
