import { DEFAULT_USER } from '../constants'
import { Response as AirtableResponse } from 'airtable'
import { UnknownObj } from '../typings'

/**
 * @todo typings for airtable are wrong
 */
const Airtable = require('airtable')

Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
})

const base = Airtable.base(process.env.AIRTABLE_APP_KEY)
const Advices = base('Advices').select({ view: 'Grid view' })
const FamilyMembers = base('FamilyMembers').select({ view: 'Grid view' })

/**
 * @todo import typings to replace `unknown`
 * @todo move this into library code
 */
export type FirstPageCallbackType = (error: any, records: any) => unknown
export type BaseSelectResultType = {
  firstPage: (cb: FirstPageCallbackType) => Promise<any>
} & UnknownObj
const getFirstPage = <RecordsType = unknown>(
  baseSelect: BaseSelectResultType
): Promise<[Error | undefined, AirtableResponse<unknown>]> =>
  new Promise((resolve, reject) => {
    baseSelect.firstPage(
      (error: any, records: AirtableResponse<RecordsType>) => {
        if (error) console.error(error)
        resolve([error, records])
      }
    )
  })

const getFamilyMembers = () => getFirstPage(FamilyMembers)
const getAdvices = () => getFirstPage(Advices)

export type DefaultRecordType = {
  fields: UnknownObj
  getId: () => string
} & UnknownObj
const fromRecordToItemWithUid = <
  RecordType extends DefaultRecordType = DefaultRecordType
>(
  record: RecordType
) => {
  return { ...record.fields, uid: record.getId() }
}

export default {
  Query: {
    user() {
      return Promise.resolve({ ...DEFAULT_USER })
    },
    async adviceList() {
      const [error, records] = await getAdvices()
      if (error) return
      const list = records.map((x: any) => fromRecordToItemWithUid(x))
      console.log('Advice', list)
      return list
    },
    async familyList() {
      const [error, records] = await getFamilyMembers()
      if (error) return
      const list = records.map((x: any) => fromRecordToItemWithUid(x))
      console.log('Family', list)
      return list
    },
  },
}
