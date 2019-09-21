/**
 * @todo cleanup (lower priority)
 */
import * as React from 'react'
import styled from 'styled-components'
import { AdviceItemType } from '../../typings'
import { StyledMaterialIcon } from '../MaterialIcons'

const StyledCardListGridSection = styled.section`
  max-width: calc(100% - 15%);
  margin: auto;

  ul {
    display: flex;
    margin: 0;
    padding: 3rem 0;
  }
  ul li {
    &:not(:first-child) {
      margin: 0 0 0 0.5rem;
    }
    &:hover {
      box-shadow: 0px 8px 6px 0 rgba(0, 0, 0, 0.4);
    }

    /* width: 25%; */
    min-height: 340px;
    padding: 0 1rem 2rem;
    background: #fff;
    border-radius: 4px;
    display: grid;
    grid-template-columns: 40% 60%;
    /* grid-gap: 8px 8px; */
    grid-template-areas:
        'type avatar'
        'title title'
        'summary summary'
        'description description'
        'time lock';
    justify-items: stretch;
    box-sizing: border-box;
}

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
      font-size: 0.9rem;
      color: #24c0fd;
      font-weight: 500;
    }
    p {
      grid-area: description;
      font-size: 0.9rem;
      font-weight: 300;
      font-style: italic;
    }
    time {
      color: #a3a3a3;
      grid-area: time;
      font-size: 0.9rem;
      font-weight: 100;
    }
    svg {
      grid-area: lock;
      margin-left: calc(100% - 24px);
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
  const { title, text, description, happenedOn } = props

  return (
    <>
      <CardTagType type="life" />
      <UserAvatar />
      <h2>{title}</h2>
      <h3>{text}</h3>
      <p>{description}</p>
      <time>{happenedOn}</time>
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
