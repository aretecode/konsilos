import { gql } from 'apollo-boost'
import { useMutation } from 'react-apollo'
import { UserType } from '../typings'

export const CREATE_USER = gql`
  mutation User($input: UserInput) {
    user(input: $input) {
      uid
      name
      email
      picture
      nickname
    }
  }
`

export function useCreateUser() {
  return useMutation<UserType>(CREATE_USER)
}
