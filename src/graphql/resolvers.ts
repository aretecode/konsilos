import { promisify } from 'util'
import { DEFAULT_USER } from '../constants'

/**
 * @todo typings for airtable are wrong
 */
const Airtable = require('airtable')

Airtable.configure({
  apiKey: process.env.AIRTABLE_APP_KEY,
})

const base = Airtable.base()
const Advices = base.table('Advices').select({ view: 'Grid view' })
const FamilyMembers = base.table('FamilyMembers').select({ view: 'Grid view' })

const getAdvices = promisify(Advices.firstPage)
const getFamilies = promisify(FamilyMembers.firstPage)

export default {
  Query: {
    user() {
      return Promise.resolve({ ...DEFAULT_USER })
    },
    async adviceList() {
      const adviceList = await getAdvices()
      return adviceList
    },
    async familyList() {
      const familyList = await getFamilies()
      return familyList
    },
  },
}
