/**
 * @see https://www.apollographql.com/docs/react/api/react-hooks/#usequery
 */
import * as React from 'react'
import { useFamilyList } from '../../graphql/useFamilyList'
import { StyledFamilyList } from './FamilyList'

export const GraphqlFamilyList = (
  props: React.ComponentProps<typeof StyledFamilyList>
) => {
  const result = useFamilyList()
  console.log(result)
  return <StyledFamilyList {...props} />
}
