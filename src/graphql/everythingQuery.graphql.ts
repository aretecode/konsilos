import { gql } from 'apollo-boost'

export default gql`
  query Everything {
    user {
      uid
      name
      nickname
      email

      adviceList {
        text
        description
        type
        familyMemberId
        availableOn
        happenedOn
        uid
      }
      familyList {
        name
        imageUrl
        dateOfBirth
        uid
      }
    }
  }
`
