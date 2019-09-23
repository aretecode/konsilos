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
const Advices = base('Advices')
const FamilyMembers = base('FamilyMembers')
const Users = base('Users')

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

const getFamilyMembers = () => {
  return getFirstPage(FamilyMembers.select({ view: 'Grid view' }))
}
const getAdvices = () => {
  return getFirstPage(Advices.select({ view: 'Grid view' }))
}

const createItem = (table: any, item: any) => {
  return table.create([{ fields: { ...item } }], (error: any, records: any) => {
    if (error) {
      console.error(error)
    }
    const record = records[0]
    const payload = { ...record.fields }
    return Promise.resolve(payload)
  })
}

const updateItem = (table: any, item: any, id: string) => {
  return table.update(
    [
      {
        id,
        fields: { ...item },
      },
    ],
    (error: any, records: any) => {
      if (error) {
        console.error(error)
      }
      const record = records[0]
      const payload = { ...record.fields }
      return Promise.resolve(payload)
    }
  )
}

const deleteItem = (table: any, id: string) => {
  return table.destroy([id], (error: any, records: any) => {
    if (error) {
      console.error(error)
    }
    return `Deleted record with ID ${records[0].getId()}`
  })
}

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
  Mutation: {
    createAdvice: async (_: any, { input }: any) => {
      const result = await createItem(Advices, input)
      console.log(result)
      return result
    },
    updateAdvice: async (_: any, { input, id }: any) => {
      const result = await updateItem(Advices, input, id)
      console.log(result)
      return result
    },
    deleteAdvice: async (_: any, { id }: any) => {
      const result = await deleteItem(Advices, id)
      return result
    },
    addFamilyMember: async (_: any, { input }: any) => {
      const result = await createItem(FamilyMembers, input)[0]
      return result
    },
    updateFamilyMember: async (_: any, { input, id }: any) => {
      const result = await updateItem(Advices, input, id)[0]
      return result
    },
    deleteFamilyMember: async (_: any, { id }: any) => {
      const result = await deleteItem(FamilyMembers, id)
      return result
    },
    createUser: async (_: any, { input }: any) => {
      const result = await createItem(Users, input)[0]
      return result
    },
    updateUser: async (_: any, { input, id }: any) => {
      const result = await updateItem(Users, input, id)[0]
      return result
    },
    nukeAccount: async (_: any, { id }: any) => {
      const result = await deleteItem(Users, id)
      return result
    },
  },
}
