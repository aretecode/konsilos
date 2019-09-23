import { useMutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import { FamilyMemberItemType } from '../typings'

// example
// mutation AddAdvice {
//   createAdvice(input: {
//   title: "eh",
//   text: "moose",
//   description: "igloo",
//   type: "life",
//   familyMemberId: "1",
//   userId: "1"
// }) {
//     text
//     description
//     type
//     familyMemberId
//     availableOn
//     happenedOn
//     uid
//   }
// }
export const ADD_FAMILY = gql`
  mutation AddFamily($input: FamilyInput) {
    addFamilyMember(input: $input) {
      uid
    }
  }
`

export function useAddFamily() {
  return useMutation<FamilyMemberItemType>(ADD_FAMILY)
}
