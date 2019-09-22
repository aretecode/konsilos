import * as React from 'react'
import { Form, InputConfigType } from '../../components/Form'

const inputConfigList: InputConfigType[] = [
  {
    propertyName: 'familyMemberId',
    label: 'who is this advice for?',
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

export default { title: 'Forms' }

// ignoring this now
// export const empty = () => <Form list={[]} />

export const formWithDifferentFields = () => (
  <Form
    list={inputConfigList}
    onSubmit={(serialized: any) => {
      // nothing
    }}
  />
)
