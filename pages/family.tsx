import * as React from 'react'
import { AddFamily, StyledFamilyList } from '../src/features/Family'

export default () => {
  return (
    <>
      <h1>Family</h1>
      <AddFamily />
      <hr />
      <StyledFamilyList />
    </>
  )
}
