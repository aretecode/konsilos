import * as React from 'react'
import { DEFAULT_ADVICE_LIST } from '../src/constants'
import { StyledCardListGrid } from '../src/components/CardListGrid'

export default () => (
  <>
    <h1>Advice</h1>
    <StyledCardListGrid list={DEFAULT_ADVICE_LIST} />
  </>
)
