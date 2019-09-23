import { DEFAULT_USER } from '../constants'
const Airtable = require('airtable')


Airtable.configure({
  apiKey: 'keyZU3E7hyIL4gkhr',
})

const base = Airtable.base('appEtPntnilqHwtKW')
const Advices = base.table('Advices')
                    .select({ view: 'Grid view' })
const FamilyMembers = base.table('FamilyMembers')
                    .select({ view: 'Grid view' })

const getAdvices = Advices.firstPage
const getFamilies = FamilyMembers.firstPage


export default {
  Query: {
    user() {
      return Promise.resolve({ ...DEFAULT_USER })
    },
    async adviceList() {
      await getAdvices((error:any, records:any) => {
        if (error) {
          console.error(error)
          return
        }
        return records
      })
    },
    async familyList() {
      await getFamilies((error:any, records:any) => {
        if (error) {
          console.error(error)
          return
        }
        return records
      })
    },
  },
}
