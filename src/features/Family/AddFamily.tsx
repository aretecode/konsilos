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

export const AddFamily = (props: { className?: string }) => {
  return (
    <Form
      {...props}
      list={familyInputConfigList}
      onSubmit={(serialized: any) => {
        console.log(serialized)
      }}
    />
  )
}
