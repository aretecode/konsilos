/**
 * @see https://storybook.js.org/basics/guide-react/
 */
import React, { StrictMode } from 'react'
import { configure, setAddon, addDecorator } from '@storybook/react'
import styled, { createGlobalStyle } from 'styled-components'
import { AppStyles } from '../src/AppStyles'

const StyledStory = styled.div`
  background-color: white;
  min-height: 100vh;
`

const toStyledStory = story => {
  class StoryApp extends React.PureComponent {
    render() {
      console.debug('rendering: ' + story.name)
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

const req = require.context('../src', true, /\.story\.tsx$/)
function loadStories() {
  req.keys().forEach(req)
}
configure(loadStories, module)
