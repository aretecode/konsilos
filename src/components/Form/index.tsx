/**
 * @see https://material.io/components/text-fields/#filled-text-field
 * @see https://codesandbox.io/s/jzr284y1nw
 */
import * as React from 'react'
import styled, { css } from 'styled-components'
import { SerializedObj, AnyObj } from 'src/typings'

export type StyledInputPropType = { isValid?: boolean; isActive?: boolean }

export const StyledInput = styled.input`
  font-size: 1.3rem;
  padding: 0.75rem 0.75rem 0.75rem 0.5rem;
  background: #cfd8dc;
  display: block;
  border: none;
  border-bottom: 1px solid #757575;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1) border-bottom-color;
  outline: ${props => (props.isActive ? 'none' : 'none')};
  &:hover {
    color: var(--color-blue-dark);
    border-bottom-color: var(--color-blue-dark);
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
  background: #cfd8dc;
  display: block;
  border: none;
  border-bottom: 1px solid #757575;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1) border-bottom-color;
  outline: ${props => (props.isActive ? 'none' : 'none')};
  &:hover {
    color: var(--color-blue-dark);
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
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1) color,
    0.24s cubic-bezier(0.075, 0.82, 0.165, 1) top;
  position: absolute;
  top: 1rem;
  left: 0.5rem;

  ${(props: StyledLabelTextPropType) =>
    props.isActive &&
    css`
      color: var(--color-blue-dark);
    `};

  ${props =>
    (props.hasValue || props.isActive) &&
    css`
      font-size: 0.5rem;
      top: 0.25rem;
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

const FormWithContext = (props: any) => {
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

const StyledForm = styled(FormWithContext)`
  margin: 0;
  padding: 1rem;

  button {
    margin-top: 0.5rem;
    padding: 1rem 2rem;
    background-color: var(--color-blue);
    border: 1px solid var(--color-blue-dark);
    color: #fff;
  }
`

export type FormPropType = {
  list: InputConfigType[]
  onSubmit: (serialized: SerializedObj) => void
} & React.ComponentProps<typeof StyledForm>

export class Form extends React.PureComponent<FormPropType> {
  render() {
    const { list, onSubmit, ...remainingProps } = this.props
    return (
      <FormContext.Provider value={{ serialized: {}, onSubmit }}>
        <StyledForm {...remainingProps}>
          {list.map(renderInput)}
          <button type="submit">submit</button>
        </StyledForm>
      </FormContext.Provider>
    )
  }
}
