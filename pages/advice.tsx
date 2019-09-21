import * as React from 'react'
import { AdviceItemType } from '../src/typings'
import { DEFAULT_ADVICE_LIST } from '../src/constants'
import { StyledCardListGrid } from '../src/components/CardListGrid'
import { Form, InputConfigType } from '../src/components/Form'

// add to the family!
export const familyInputConfigList: InputConfigType[] = [
  {
    propertyName: 'name',
    label: 'name',
    isRequired: true,
  },
  {
    propertyName: 'birthday',
    label: 'date of birth',
    type: 'date',
  },
  {
    propertyName: 'imageUrl',
    label: 'image',
    type: 'url',
  },
]
export type AddAdviceInputConfigItemType = InputConfigType & {
  propertyName: keyof AdviceItemType
}
export const inputConfigList: AddAdviceInputConfigItemType[] = [
  {
    propertyName: 'familyMemberId',
    label: 'who is this advice for?',
    isRequired: true,
  },
  {
    propertyName: 'title',
    label: 'what is your advice?',
    isRequired: true,
  },
  {
    propertyName: 'description',
    label: 'why does this advice matter?',
    type: 'textarea',
  },
  {
    propertyName: 'happenedOn',
    label: 'when?',
    type: 'date',
    isRequired: true,
  },
]

export default () => (
  <>
    <h1>Advice</h1>
    <Form
      list={inputConfigList}
      onSubmit={serialized => {
        console.log(serialized)
      }}
    />
    <hr />
    <Form
      list={familyInputConfigList}
      onSubmit={serialized => {
        console.log(serialized)
      }}
    />
    <hr />
    <StyledCardListGrid list={DEFAULT_ADVICE_LIST} />
  </>
)
