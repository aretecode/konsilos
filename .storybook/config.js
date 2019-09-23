/**
 * @see config.js
 * this file is a duplicate because `Storybook config.js must be specified as entrypoint`
 * for static storybook builder
 */
import React from 'react'
import { configure, addDecorator } from '@storybook/react'
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
        React.createElement(AppStyles, null, story())
      )
    }
  }
  return React.createElement(StoryApp, null)
}

addDecorator(toStyledStory)
configure(require.context('../src', true, /\.story\.tsx$/), module)
