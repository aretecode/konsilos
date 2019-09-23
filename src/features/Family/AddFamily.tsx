import * as React from 'react'
import uuid from 'uuid/v4'
import { isFunction } from '../../utils/is'
import { SerializedObj } from '../../typings'
import { Form, InputConfigType } from '../../components/Form'
import { KonsilosContext } from '../KonsilosContext'

// add to the family!
export const familyInputConfigList: InputConfigType[] = [
  {
    propertyName: 'name',
    label: 'name',
    isRequired: true,
  },
  {
    propertyName: 'email',
    label: 'email',
    type: 'email',
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

export type AddFamilyPropType = {
  className?: string
  onSubmit?: (serialized: SerializedObj) => void
}
export const AddFamily = (props: AddFamilyPropType) => {
  const { familyList, setFamilyList } = React.useContext(KonsilosContext)

  return (
    <Form
      {...props}
      list={familyInputConfigList}
      onSubmit={(serialized: any) => {
        const merged = {
          ...serialized,
          uid: uuid(),
          imageUrl:
            serialized.imageUrl || 'https://www.gravatar.com/avatar/example',
        }
        console.log({ merged })
        setFamilyList([...familyList, merged] as any)

        if (isFunction(props.onSubmit)) props.onSubmit(merged)
      }}
    />
  )
}
