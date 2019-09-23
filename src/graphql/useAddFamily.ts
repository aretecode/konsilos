import { useMutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import { FamilyMemberItemType } from '../typings'

export const ADD_FAMILY = gql`
  mutation AddFamily($input: FamilyInput) {
    addFamily(input: $input) {
      uid
    }
  }
`

export function useAddFamily() {
  return useMutation<FamilyMemberItemType>(ADD_FAMILY)
}
