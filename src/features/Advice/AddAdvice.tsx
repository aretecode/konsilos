import * as React from 'react'
import { AdviceItemType } from '../../typings'
import { Form, InputConfigType } from '../../components/Form'
import { KonsilosContext } from '../KonsilosContext'

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

export const AddAdvice = () => {
  const { adviceList, setAdviceList } = React.useContext(KonsilosContext)

  return (
    <Form
      list={inputConfigList}
      onSubmit={(serialized: any) => {
        console.log(serialized)
        setAdviceList([...adviceList, serialized] as any)
      }}
    />
  )
}
