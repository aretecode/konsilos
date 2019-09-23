import { useMutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import { AdviceItemType } from '../typings'

export const DELETE_ADVICE = gql`
  mutation DeleteAdvice(id: ID!) {
    updateAdvice(id: $id) {
      uid
    }
  }
`

export function useAddFamily() {
  return useMutation<AdviceItemType>(DELETE_ADVICE)
}
