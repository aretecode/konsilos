/**
 * @todo cleanup (lower priority)
 */
import * as React from 'react'
import styled from 'styled-components'
import { AdviceItemType } from '../../typings'
import { StyledMaterialIcon } from '../MaterialIcons'

const StyledCardListGridSection = styled.section`
  ul {
    display: flex;
    padding-bottom: 1rem;
    padding-left: 1rem;
  }
  ul li {
    &:not(:first-child) {
      margin: 0 0 0 0.5rem;
    }
    &:hover {
      box-shadow: 0 0 2rem 0 #ccc;
    }

    width: 25%;
    padding: 0 1rem 2rem;
    background: #fff;
    border-radius: 4px;

    display: grid;
    grid-template-columns: 30% 70%;
    grid-gap: 8px 8px;
    grid-template-areas:
      'type avatar'
      'title title'
      'summary summary'
      'description description'
      'time lock';
    justify-items: stretch;

    h2,
    h3,
    h4 {
      margin: 0;
      padding: 0;
    }
    h2 {
      grid-area: title;
    }
    h3 {
      grid-area: summary;
    }
    p {
      grid-area: description;
    }
    time {
      color: #a3a3a3;
      grid-area: time;
    }
    svg {
      grid-area: lock;
      margin-left: 50%;
    }
  }
`

const UserAvatarWrap = styled.section`
  grid-area: avatar;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-items: center;

  > h5 {
    flex-basis: 100%;
  }
  > h5,
  > img {
    margin: 0;
    padding: 0;
  }
`

/**
 * @todo hardcoded data #!!
 * @todo swap out image
 */
const UserAvatar = () => (
  <UserAvatarWrap>
    <img
      src="https://konsilos.com/img/landing/small1.png"
      width="61"
      height="61"
      alt="img"
    />
    <h5>Laura</h5>
  </UserAvatarWrap>
)

/**
 * @todo swap this with dynamic data
 * @see /typings.ts
 */
const CardTagType = (props: { type: 'life' }) => {
  return (
    <img
      src="https://konsilos.com/img/landing/tag-card-life.png"
      width="88"
      height="132"
      alt="About Life"
    />
  )
}

const AdviceCard = (props: Partial<AdviceItemType>) => {
  const { title, text, description, time } = props

  return (
    <>
      <CardTagType type="life" />
      <UserAvatar />
      <h2>{title}</h2>
      <h3>{text}</h3>
      <p>{description}</p>
      <time>{time}</time>
      <StyledMaterialIcon icon="lock" />
    </>
  )
}

const CardListGrid = (props: {
  className?: string
  list: AdviceItemType[]
}) => {
  const { list, ...remaining } = props

  return (
    <StyledCardListGridSection {...remaining}>
      <ul>
        {list.map(value => {
          const { uid, ...rest } = value
          return (
            <li key={uid}>
              <AdviceCard {...rest} />
            </li>
          )
        })}
      </ul>
    </StyledCardListGridSection>
  )
}

const StyledCardListGrid = styled(CardListGrid)``

export {
  StyledCardListGridSection,
  UserAvatarWrap,
  UserAvatar,
  CardTagType,
  AdviceCard,
  CardListGrid,
  StyledCardListGrid,
}
