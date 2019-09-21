/**
 * @todo this file will not end up as a `page`
 *       but for dev velocity, it's here for now
 */
import * as React from 'react'
import { AdviceItemType } from '../src/typings'
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
    propertyName: 'text',
    label: 'summary?',
    isRequired: true,
  },
  {
    propertyName: 'type',
    label: 'life, movie, travel, chat?',
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

export default () => {
  return (
    <>
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
    </>
  )
}
