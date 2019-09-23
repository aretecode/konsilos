import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'
import { AdviceItemType } from '../typings'

export const ADVICE_LIST = gql`
  query AdviceList {
    adviceList {
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

export function useAdviceList() {
  return useQuery<{ adviceList: AdviceItemType[] }>(ADVICE_LIST)
}
