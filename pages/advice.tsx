import * as React from 'react'
import { StyledCardListGrid } from '../src/components/CardListGrid'
import { DEFAULT_ADVICE_LIST } from '../src/constants'
import Add from './add'

export default () => (
  <>
    <h1>Advice</h1>
    <Add />
    <StyledCardListGrid list={DEFAULT_ADVICE_LIST} />
  </>
)
