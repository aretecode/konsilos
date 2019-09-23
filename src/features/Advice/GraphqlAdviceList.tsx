/**
 * @see https://www.apollographql.com/docs/react/api/react-hooks/#usequery
 */
import * as React from 'react'
import { useAdviceList } from '../../graphql/useAdviceList'
import { StyledAdviceList } from './AdviceList'

export const GraphqlAdviceList = (
  props: React.ComponentProps<typeof StyledAdviceList>
) => {
  const result = useAdviceList()
  const list = result.data && result.data.adviceList
  return <StyledAdviceList {...props} list={list} />
}
