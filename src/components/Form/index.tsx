/**
 * @see https://codesandbox.io/s/jzr284y1nw
 */
import * as React from 'react'
import styled, { css } from 'styled-components'
import { SerializedObj, AnyObj } from 'src/typings'

export type StyledInputPropType = { isValid?: boolean; isActive?: boolean }

export const StyledInput = styled.input`
  font-size: 1.3rem;
  padding: 10px 10px 10px 5px;
  background: transparent;
  display: block;
  border: none;
  border-bottom: 1px solid #757575;
  transition: 1s ease-in-out border-bottom-color;
  outline: ${props => (props.isActive ? 'none' : 'hidden')};
  &:hover {
    color: rgba(98, 0, 238, 0.87);
  }
  ${(props: StyledInputPropType) =>
    props.isValid === false &&
    css`
      border-bottom-color: red;
    `}
`

const StyledTextarea = styled.textarea`
  font-size: 1.3rem;
  padding: 10px 10px 10px 5px;
  background: transparent;
  display: block;
  border: none;
  border-bottom: 1px solid #757575;
  transition: 1s ease-in-out border-bottom-color;
  &:hover {
    color: rgba(98, 0, 238, 0.87);
  }
  ${(props: StyledInputPropType) =>
    props.isValid === false &&
    css`
      border-bottom-color: red;
    `}
`

export interface StyledLabelTextPropType {
  isActive?: boolean
  hasValue?: boolean
}
export const StyledLabelText = styled.label`
  color: rgba(0, 0, 0, 0.6);
  transition: 1s ease-in-out color;
  position: absolute;
  top: 0;

  ${(props: StyledLabelTextPropType) =>
    props.isActive &&
    css`
      color: rgba(98, 0, 238, 0.87);
    `};

  ${props =>
    (props.hasValue || props.isActive) &&
    css`
      font-size: 0.5rem;
    `}
`

export const StyledInputWrap = styled.div`
  position: relative;
  display: flex;
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  margin-top: 0.5rem;
  min-height: 1.5rem;
`

export const StyledError = styled.span`
  color: red;
  visibility: hidden;
  ${(props: { isValid?: boolean }) =>
    props.isValid === false &&
    css`
      visibility: visible;
    `};
`

/**
 * =========== domain =========
 */

/**
 * @note there are many other props, this is just a super minimal form
 */
export type InputConfigType = {
  label: string
  value?: any
  type?:
    | 'date'
    | 'url'
    | 'text'
    | 'textarea'
    | 'number'
    | 'email'
    | 'checkbox'
    | 'password'
    | 'color'

  isRequired?: boolean
  /**
   * used for serialization
   */
  propertyName: string
}

const FormContext = React.createContext({
  serialized: {} as AnyObj,
  onSubmit(serialized: SerializedObj) {},
})

const InputFactory = (
  props: Partial<InputConfigType> & React.ComponentProps<typeof StyledInput>
) => {
  const { type, ...rest } = props
  if (type === 'textarea') {
    return <StyledTextarea {...(rest as any)} />
  } else {
    return <StyledInput {...props} />
  }
}

const Input = (props: InputConfigType) => {
  const { label, propertyName, value } = props
  const context = React.useContext(FormContext)
  const [isActive, setIsActive] = React.useState(false)
  const [stateValue, setValue] = React.useState(value)

  /**
   * @todo gross
   */
  React.useEffect(() => {
    context.serialized[propertyName] = stateValue
  })

  return (
    <StyledInputWrap key={label}>
      <StyledLabelText
        isActive={isActive}
        hasValue={!!stateValue}
        htmlFor={propertyName}
      >
        {label}
      </StyledLabelText>
      <InputFactory
        id={propertyName}
        {...props}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        value={stateValue}
        onChange={event => setValue(event.target.value)}
      />
    </StyledInputWrap>
  )
}

const renderInput = (x: InputConfigType) => (
  <Input key={x.propertyName} {...x} />
)

const StyledForm = (props: any) => {
  const { onSubmit, serialized } = React.useContext(FormContext)
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        onSubmit(serialized)
      }}
      {...props}
    />
  )
}

export class Form extends React.PureComponent<{
  list: InputConfigType[]
  onSubmit: (serialized: SerializedObj) => void
}> {
  render() {
    const { list, onSubmit } = this.props
    return (
      <FormContext.Provider value={{ serialized: {}, onSubmit }}>
        <StyledForm>
          {list.map(renderInput)}
          <button type="submit">submit</button>
        </StyledForm>
      </FormContext.Provider>
    )
  }
}
