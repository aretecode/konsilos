import * as React from 'react'
import { UserAvatar } from './Avatar'
import { DEFAULT_FAMILY_MEMBER_LIST } from '../../constants'

export default { title: 'Avatar' }
export const list = () => (
  <ul>
    {DEFAULT_FAMILY_MEMBER_LIST.map(x => {
      const { uid, ...rest } = x
      return (
        <li key={uid}>
          <UserAvatar {...rest} />
        </li>
      )
    })}
  </ul>
)
export const empty = () => <UserAvatar {...({} as any)} />
