import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'
import { UserType } from '../typings'

export const USER = gql`
  query User {
    user {
      name
      nickname
      email
      uid
    }
  }
`

export function useAdviceList() {
  return useQuery<{ user: UserType }>(USER)
}
