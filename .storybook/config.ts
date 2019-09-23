/**
 * @see https://storybook.js.org/basics/guide-react/
 */
import React from 'react'
import { configure, setAddon, addDecorator } from '@storybook/react'
import styled, { createGlobalStyle } from 'styled-components'
import { AppStyles } from '../src/AppStyles'

const StyledStory = styled.div`
  background-color: #fff;
  min-height: 100vh;
`

const toStyledStory = story => {
  class StoryApp extends React.PureComponent {
    render() {
      return React.createElement(
        StyledStory,
        null,
        React.createElement(AppStyles, null),
        React.createElement(StrictMode, null, story())
      )
    }
  }
  return React.createElement(StoryApp, null)
}

addDecorator(toStyledStory)

/**
 * @todo https://github.com/storybookjs/storybook/issues/4479
 */
if (process.env.NODE_ENV === 'test') {
  // not polyfilled in config file
  configure(
    (global as any).__requireContext(
      __dirname,
      '../src',
      true,
      /\.story\.tsx$/
    ),
    module
  )
} else {
  configure(require.context('../src', true, /\.story\.tsx$/), module)
}
