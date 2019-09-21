import * as React from 'react'
import styled from 'styled-components'
import { StyledAdviceList } from './AdviceList'
import { DEFAULT_ADVICE_LIST } from '../../constants'
const StyledAdviceListWrap = styled.div`
  background: #efefef;
  padding: 1rem;
  height: 100vh;
  width: 100vw;
`
export default { title: 'AdviceList' }
export const withStaticList = () => (
  <StyledAdviceListWrap>
    <StyledAdviceList list={DEFAULT_ADVICE_LIST} />
  </StyledAdviceListWrap>
)
