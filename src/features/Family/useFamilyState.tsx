import * as React from 'react'
import { DEFAULT_FAMILY_MEMBER_LIST } from '../../constants'
import { FamilyMemberItemType } from '../../typings'

export function useFamilyState(): [
  FamilyMemberItemType[],
  (list: FamilyMemberItemType[]) => void
] {
  const [familyList, updateFamilyList] = React.useState(
    DEFAULT_FAMILY_MEMBER_LIST
  )
  return [familyList, updateFamilyList]
}
