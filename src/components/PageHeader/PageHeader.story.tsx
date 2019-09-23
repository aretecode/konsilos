import * as React from 'react'
import styled from 'styled-components'
import { PageHeader } from './PageHeader'

const StyledPageHeader = styled(PageHeader)`
  background-color: var(--color-blue);
`

export default { title: 'PageHeader' }
export const styledPageHeader = () => <StyledPageHeader>eh</StyledPageHeader>
export const normal = () => <PageHeader>eh</PageHeader>
