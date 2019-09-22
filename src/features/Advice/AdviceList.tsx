/**
 * @todo cleanup (lower priority)
 */
import * as React from 'react'
import styled from 'styled-components'
import { AdviceItemType, AdviceType } from '../../typings'
import { StyledMaterialIcon } from '../../components/MaterialIcons'
import { KonsilosContext } from '../KonsilosContext'
import { UserAvatar } from '../../components/Avatar'

const StyledAdviceListSection = styled.section`
  margin: auto;
  overflow-x: scroll;
  padding: 1rem;

  ul {
    display: flex;
    margin: 0;
    padding: 3rem 0;
  }
  ul li {
    &:not(:first-child) {
      margin: 0 0 0 0.5rem;
    }
    transition: box-shadow 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
      box-shadow: 0px 8px 6px 0 rgba(0, 0, 0, 0.4);
    }

    min-width: 250px;
    min-height: 340px;
    padding: 0 1rem 2rem;
    background: #fff;
    border-radius: 4px;
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-areas:
      'type avatar'
      'title title'
      'summary summary'
      'description description'
      'time lock';
    justify-items: stretch;
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
`

export type CardTagPropType = { type: AdviceType } & Partial<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
>
const CardTag = (props: CardTagPropType) => {
  return (
    <img
      src={`https://pencamcc.sirv.com/Images/tags/tag-${props.type}.png?format=webp`}
      width="88"
      height="132"
      alt="About Life"
    />
  )
}

const AdviceCard = (props: Omit<AdviceItemType, 'uid'>) => {
  const { title, text, description, happenedOn, familyMemberId, type } = props
  const { familyList } = React.useContext(KonsilosContext)
  const familyMember = familyList.find(x => x.uid === familyMemberId)!

  return (
    <>
      <CardTag type={type} />
      <UserAvatar {...familyMember} />
      <h2>{title}</h2>
      <h3>{text}</h3>
      <p>{description}</p>
      <time>{happenedOn}</time>
      <StyledMaterialIcon icon="lock" />
    </>
  )
}

export type AdviceListPropType = { className?: string; list?: AdviceItemType[] }
const AdviceList = (props: AdviceListPropType) => {
  const {
    list = React.useContext(KonsilosContext).adviceList,
    ...remaining
  } = props

  return (
    <StyledAdviceListSection {...remaining}>
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
    </StyledAdviceListSection>
  )
}

const StyledAdviceList = styled(AdviceList)``

export {
  StyledAdviceListSection,
  CardTag,
  AdviceCard,
  AdviceList,
  StyledAdviceList,
}
