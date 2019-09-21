import 'jest'
import * as React from 'react'
import { render } from '@testing-library/react'
import { MaterialIcon } from './MaterialIcons'

describe('MaterialIcon', () => {
  it('should render icon for name', () => {
    const { container } = render(<MaterialIcon icon="facebook" />)
    expect(container).toMatchSnapshot()
  })
})
