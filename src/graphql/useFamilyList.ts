import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'
import { FamilyMemberItemType } from '../typings'

export const FAMILY_LIST = gql`
  query FamilyList {
    familyList {
      name
      imageUrl
      dateOfBirth
      uid
    }
  }
`

export function useFamilyList() {
  return useQuery<{ familyList: FamilyMemberItemType[] }>(FAMILY_LIST)
}
