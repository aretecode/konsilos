/**
 * @see https://www.apollographql.com/docs/react/api/react-hooks/#usemutation
 */
import * as React from 'react'
import { useAddFamily } from '../../graphql/useAddFamily'
import { AddFamily } from './AddFamily'

export const GraphqlAddFamily = (
  props: React.ComponentProps<typeof AddFamily>
) => {
  const [addFamily, { data }] = useAddFamily()
  console.log({ addFamily, data })
  return <AddFamily {...props} />
}
