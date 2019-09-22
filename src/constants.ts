/**
 * @todo these are not translated
 */
import {
  AdviceItemType,
  FamilyMemberItemType,
  UserWithFamilyAndAdviceType,
} from './typings'

export const DEFAULT_ADVICE_LIST: AdviceItemType[] = [
  {
    uid: 1,
    familyMemberId: -1,
    type: 'life',
    title: 'About Life',
    text: 'Turning 18 years',
    description: 'I have something very important to tell you...',
    happenedOn: '02/05/2001',
  },
  {
    uid: 2,
    familyMemberId: -2,
    type: 'advice',
    title: 'Have an Experience',
    text: 'Turning 40 years',
    description: 'Dear daughter, silence can be a great friend. Try...',
    happenedOn: '27/09/2016',
  },
  {
    uid: 3,
    familyMemberId: -3,
    type: 'movie',
    title: 'Rocky Balboa',
    text: 'When life gets hard',
    description: ' Son, nobody will hit you as hard as life. But...',
    happenedOn: '01/08/2015',
  },
  {
    uid: 4,
    familyMemberId: -4,
    type: 'book',
    title: 'The Little Prince',
    text: 'Turning 9 years',
    description: 'I must read this book with Daniel and teach...',
    happenedOn: '13/12/2015',
  },
  {
    uid: 5,
    familyMemberId: -5,
    type: 'travel',
    title: 'Steve Jobs',
    text: 'Never give up',
    description: 'Sometimes, life hits you in the head with a brick...',
    happenedOn: '11/12/2019',
  },
  {
    uid: 6,
    familyMemberId: -1,
    type: 'book',
    title: 'Tim Ferriss',
    text: 'Conquor fear',
    description:
      'What we fear doing most is usually what we most need to do most...',
    happenedOn: '11/12/2019',
  },

  // === duplicated ===
  {
    uid: 7,
    familyMemberId: -2,
    type: 'life',
    title: 'About Life',
    text: 'Turning 18 years',
    description: 'I have something very important to tell you...',
    happenedOn: '02/05/2001',
  },
  {
    uid: 8,
    familyMemberId: -5,
    type: 'travel',
    title: 'Steve Jobs',
    text: 'Never give up',
    description: 'Sometimes, life hits you in the head with a brick...',
    happenedOn: '11/12/2019',
  },
  {
    uid: 9,
    familyMemberId: -4,
    type: 'life',
    title: 'The Little Prince',
    text: 'Turning 9 years',
    description: 'I must read this book with Daniel and teach...',
    happenedOn: '13/12/2015',
  },
]

export const DEFAULT_FAMILY_MEMBER_LIST: FamilyMemberItemType[] = [
  {
    uid: -1,
    dateOfBirth: '01/01/1990',
    imageUrl: 'https://pencamcc.sirv.com/Images/people/laura.png?format=webp',
    name: 'Laura',
    email: 'laura@example.com',
  },
  {
    uid: -2,
    dateOfBirth: '01/01/1990',
    imageUrl: 'https://pencamcc.sirv.com/Images/people/daniel.png?format=webp',
    name: 'Daniel',
    email: 'daniel@example.com',
  },
  {
    uid: -3,
    dateOfBirth: '01/01/1990',
    imageUrl: 'https://pencamcc.sirv.com/Images/people/charles.png?format=webp',
    name: 'Charles',
    email: 'charles@example.com',
  },
  {
    uid: -4,
    dateOfBirth: '01/01/1990',
    imageUrl: 'https://pencamcc.sirv.com/Images/people/meghan.png?format=webp',
    name: 'Meghan',
    email: 'meghan@example.com',
  },
  {
    uid: -5,
    dateOfBirth: '01/01/1990',
    imageUrl: 'https://pencamcc.sirv.com/Images/people/barbara.png?format=webp',
    name: 'Barbara',
    email: 'barbara@example.com',
  },
]

export const DEFAULT_USER: UserWithFamilyAndAdviceType = {
  uid: -1,
  name: 'Testy Jones',
  email: 'testy.jones@gmail.com',
  picture:
    'https://s.gravatar.com/avatar/a3c1eb95d1396a1b878752e9cdd9613a?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fmi.png',
  nickname: 'testy.jones',
  adviceList: DEFAULT_ADVICE_LIST,
  familyList: DEFAULT_FAMILY_MEMBER_LIST,
}
