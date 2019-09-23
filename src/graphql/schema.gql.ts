import { gql } from 'apollo-server-micro'

export default gql`
  type Advice {
    title: String
    text: String
    description: String
    type: String
    uid: ID!
    familyMemberId: String
    userId: String
    happenedOn: String
    availableOn: String
  }

  type FamilyMember {
    uid: ID!
    name: String
    userId: String
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

  input UserInput {
    name: String
    email: String
    picture: String
    nickname: String
  }

  input AdviceInput {
    title: String
    text: String
    description: String
    type: String
    familyMemberId: String
    userId: String
    happenedOn: String
    availableOn: String
  }

  input FamilyMemberInput {
    uid: ID!
    name: String
    userId: String
    dateOfBirth: String
    imageUrl: String
  }

  type Mutation {
    createUser(input: UserInput): User
    createAdvice(input: AdviceInput): Advice
    updateAdvice(id: ID!, input: AdviceInput): Advice
    deleteAdvice(id: ID!): Advice
    addFamilyMember(input: FamilyMemberInput): FamilyMember
    updateFamilyMember(id: ID!, input: FamilyMemberInput): FamilyMember
    deleteFamilyMember(id: ID!) FamilyMember
    nukeAccount(userId: ID!): String
  }
`
