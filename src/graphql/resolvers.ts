import {
  DEFAULT_ADVICE_LIST,
  DEFAULT_FAMILY_MEMBER_LIST,
  DEFAULT_USER,
} from '../constants'

export default {
  Query: {
    user() {
      return Promise.resolve({ ...DEFAULT_USER })
    },
    adviceList() {
      return Promise.resolve({ ...DEFAULT_ADVICE_LIST })
    },
    familyList() {
      return Promise.resolve({ ...DEFAULT_FAMILY_MEMBER_LIST })
    },
  },
}
