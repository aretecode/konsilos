import { DEFAULT_USER } from '../constants'
import { Response as AirtableResponse } from 'airtable'
import { UnknownObj, FamilyMemberItemType, AdviceItemType } from '../typings'

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
 * === helpers ===
 *
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
/**
 * @todo type safety
 */
const mapRecords = <ItemType>(records: any[] | readonly any[]): ItemType[] =>
  [...records].map(fromRecordToItemWithUid) as any[]

/**
 * === domain ===
 */
const getFamilyMembers = () => getFirstPage(FamilyMembers)
const getAdvices = () => getFirstPage(Advices)

export default {
  Query: {
    user() {
      return Promise.resolve({ ...DEFAULT_USER })
    },
    async adviceList() {
      const [error, records] = await getAdvices()
      if (error) return
      const list = mapRecords<AdviceItemType>(records)
      console.log('Advice', list)
      return list
    },
    async familyList() {
      const [error, records] = await getFamilyMembers()
      if (error) return
      const list = mapRecords<FamilyMemberItemType>(records)
      console.log('Family', list)
      return list
    },
  },
}
