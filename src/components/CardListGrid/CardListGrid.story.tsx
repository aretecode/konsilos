import * as React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { StyledCardListGrid } from './CardListGrid'
import { DEFAULT_ADVICE_LIST } from '../../constants'

const StyledCardListGridWrap = styled.div`
  background: #efefef;
  padding: 1rem;
  height: 100vh;
  width: 100vw;
`

storiesOf('CardListGrid', module).add('default', () => (
  <StyledCardListGridWrap>
    <StyledCardListGrid list={DEFAULT_ADVICE_LIST} />
  </StyledCardListGridWrap>
))
