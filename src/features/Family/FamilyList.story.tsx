import * as React from 'react'
import styled from 'styled-components'
import { StyledFamilyList } from './FamilyList'
import { DEFAULT_FAMILY_MEMBER_LIST } from '../../constants'

const StyledFamilyListWrap = styled.div`
  background: #efefef;
  padding: 1rem;
  height: 100vh;
  width: 100vw;
`
export default { title: 'FamilyList' }
export const withStaticList = () => (
  <StyledFamilyListWrap>
    <StyledFamilyList list={DEFAULT_FAMILY_MEMBER_LIST} />
  </StyledFamilyListWrap>
)
