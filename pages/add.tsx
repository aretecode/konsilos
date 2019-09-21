/**
 * @todo this file will not end up as a `page`
 *       but for dev velocity, it's here for now
 */
import * as React from 'react'

const AddAdvice = (props: {}) => {
  return (
    <form>
      <label>
        <span>who is this advice for?</span>
        <input required title="populate from data" />
      </label>
      <label>
        <span>what's your advice?</span>
        <input required />
      </label>
      <textarea>why does this advice matter?</textarea>
      <label>
        <span>when?</span>
        <input type="date" required />
      </label>
      <button type="submit">eternalize!</button>
    </form>
  )
}

const AddFamily = (props: {}) => {
  return (
    <form>
      <label>
        <span>name</span>
        <input required />
      </label>
      <label>
        <span>date of birth</span>
        <input type="date"></input>
      </label>
      <input type="url" placeholder="image"></input>
      <button type="submit">add to the family!</button>
    </form>
  )
}

export default () => {
  return (
    <>
      <header>big header meal deal</header>
      <AddFamily />
      <AddAdvice />
    </>
  )
}
