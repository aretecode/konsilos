import * as React from 'react'
import styled from 'styled-components'
import { StyledMaterialIcon, IconNameType } from './MaterialIcons'

const list: IconNameType[] = [
  'facebook',
  'github',
  'twitter',
  'lock',
  'unlock',
  'notification',
  'clock',
  'close',
  'video',
  'chat',
  'plane',
]

const StyledIconItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: left;

  padding-top: 0.5rem;

  span {
    padding-left: 1rem;
    font-family: monospace;
  }
`

export default { title: 'MaterialIcons' }
export const all = () => (
  <ul>
    {list.map(icon => (
      <StyledIconItem key={icon}>
        <StyledMaterialIcon icon={icon} />
        <span>{icon}</span>
      </StyledIconItem>
    ))}
  </ul>
)
