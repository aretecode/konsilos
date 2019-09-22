import 'jest'
import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { LanguageSwitcher } from './LanguageSwitcher'

describe('LanguageSwitcher', () => {
  it.skip('should render without error', () => {
    //
  })
  it.skip('should update idb (easily testable in mock)', () => {
    //
  })

  it('should switch language', () => {
    // may need to rerender
    const view = <LanguageSwitcher />
    const { container, getByTitle } = render(view)

    // aria-expanded is hidden by default
    const aside = container.querySelector('aside')!

    expect(aside.getAttribute('aria-expanded')).toBe('false')

    // get our button that opens the dialog, and the options inside of it
    const triggerButton = container.querySelector('button')!
    const options = container.querySelectorAll('i')!

    // by default, canada is selected
    const svgTitle = triggerButton.querySelector('title')!
    expect(svgTitle.innerHTML).toContain('Canada')

    // @todo - expect hidden then visible
    // const expandableDiv = triggerButton.querySelector('> div')!

    // click the trigger button
    fireEvent.click(triggerButton)

    // aria-expanded changes
    expect(aside.getAttribute('aria-expanded')).toBe('true')

    // select brazil language (from `options`)
    const brazilButton = getByTitle(/select language of brazil/i)
    fireEvent.click(brazilButton)

    // aria-expanded changes
    expect(aside.getAttribute('aria-expanded')).toBe('false')

    // check that the flag is now active
    const currentlyActiveButtonString = container
      .querySelector('button')!
      .querySelector('title')!.innerHTML
    expect(currentlyActiveButtonString).toContain('Brazil')
  })
})
