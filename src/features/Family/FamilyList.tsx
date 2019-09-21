import * as React from 'react'
import styled from 'styled-components'
import { FamilyMemberItemType } from '../../typings'
import { KonsilosContext } from '../KonsilosContext'
import { UserAvatar } from '../../components/Avatar'

const StyledListSection = styled.section`
  padding: 1rem;
`

export type FamilyListPropType = {
  className?: string
  list?: FamilyMemberItemType[]
}
const FamilyList = (props: FamilyListPropType) => {
  const {
    list = React.useContext(KonsilosContext).familyList,
    ...remaining
  } = props

  return (
    <StyledListSection {...remaining}>
      <ul>
        {list.map(value => {
          const { uid, ...rest } = value
          return (
            <li key={uid}>
              <UserAvatar {...rest} />
            </li>
          )
        })}
      </ul>
    </StyledListSection>
  )
}

const StyledFamilyList = styled(FamilyList)``

export { StyledFamilyList }
