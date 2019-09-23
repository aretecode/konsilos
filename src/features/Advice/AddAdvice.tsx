import * as React from 'react'
import uuid from 'uuid/v4'
import { isFunction } from '../../utils/is'
import { AdviceItemType, SerializedObj } from '../../typings'
import { Form, InputConfigType } from '../../components/Form'
import { KonsilosContext } from '../KonsilosContext'

export type AddAdviceInputConfigItemType = InputConfigType & {
  propertyName: keyof AdviceItemType
}
/**
 * @todo i18n on these
 */
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

export type AddAdvicePropType = {
  className?: string
  onSubmit?: (serialized: SerializedObj) => void
}
export const AddAdvice = (props: AddAdvicePropType) => {
  const { adviceList, setAdviceList } = React.useContext(KonsilosContext)

  return (
    <Form
      {...props}
      list={inputConfigList}
      onSubmit={(serialized: any) => {
        const merged = {
          uid: uuid(),
          ...serialized,
        }
        setAdviceList([...adviceList, merged] as any)

        if (isFunction(props.onSubmit)) props.onSubmit(merged)
      }}
    />
  )
}
