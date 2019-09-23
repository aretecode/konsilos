import { useMutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import { AdviceItemType } from '../typings'

export const ADD_ADVICE = gql`
  mutation AddAdvice($input: AdviceInput) {
    createAdvice(input: $input) {
      text
      description
      type
      familyMemberId
      availableOn
      happenedOn
      uid
    }
  }
`

export function useAddAdvice() {
  return useMutation<AdviceItemType>(ADD_ADVICE)
}
