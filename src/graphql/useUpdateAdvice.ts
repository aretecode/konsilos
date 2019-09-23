import { useMutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import { AdviceItemType } from '../typings'

export const UPDATE_ADVICE = gql`
  mutation UpdateAdvice(id: ID!, input: AdviceInput) {
    updateAdvice(id: $id, input: $input) {
      uid
    }
  }
`

export function useAddFamily() {
  return useMutation<AdviceItemType>(UPDATE_ADVICE)
}
