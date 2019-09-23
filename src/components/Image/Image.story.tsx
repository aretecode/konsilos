import * as React from 'react'
import { StyledImage } from './Image'
import { DEFAULT_FAMILY_MEMBER_LIST } from '../../constants'

export default { title: 'Image' }
export const lazy = () => (
  <StyledImage src="https://pencamcc.sirv.com/Images/stock/family-hands.jpg?format=webp" />
)
