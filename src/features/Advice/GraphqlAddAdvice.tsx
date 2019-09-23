/**
 * @see https://www.apollographql.com/docs/react/api/react-hooks/#usemutation
 */
import * as React from 'react'
import { AddAdvice } from './AddAdvice'
import { useAddAdvice } from '../../graphql/useAddAdvice'

export const GraphqlAddAdvice = (
  props: React.ComponentProps<typeof AddAdvice>
) => {
  const result = useAddAdvice()
  console.log(result)
  return <AddAdvice {...props} />
}
