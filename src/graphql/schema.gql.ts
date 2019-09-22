import { gql } from 'apollo-server-micro'

export default gql`
  type Advice {
    title: String
    text: String
    description: String
    type: String
    uid: ID!
    familyMemberId: String
    happenedOn: String
    availableOn: String
  }

  type FamilyMember {
    uid: ID!
    name: String
    dateOfBirth: String
    imageUrl: String
  }

  type User {
    uid: ID!
    name: String
    email: String
    picture: String
    nickname: String

    adviceList: [Advice]
    familyList: [FamilyMember]
  }

  type Query {
    user: User
    adviceList: [Advice]
    familyList: [FamilyMember]
  }
`
