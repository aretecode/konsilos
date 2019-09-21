import * as React from 'react'
import { Form, InputConfigType } from '../../components/Form'

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

export const AddFamily = () => {
  return (
    <Form
      list={familyInputConfigList}
      onSubmit={serialized => {
        console.log(serialized)
      }}
    />
  )
}
