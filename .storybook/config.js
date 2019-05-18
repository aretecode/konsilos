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

function loadStories() {
  function requireNonExamplesInContext(requireContext) {
    return requireContext
      .keys()
      .filter(key => !key.includes('examples'))
      .map(filename => requireContext(filename))
  }

  const list = []
  list.push(require.context('../src', true, /story.tsx$/))

  // 1. each require context
  // 2. get all files in the context
  // 3. dynamically require them
  list.forEach(requireContext => requireContext.keys().map(requireContext))
}

configure(loadStories, module)
