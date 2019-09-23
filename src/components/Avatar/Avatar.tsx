import * as React from 'react'
import styled from 'styled-components'
import { StyledImage } from '../Image'

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

  img {
    border: 3px solid #fff;
    border-radius: 50%;
  }

  h5 {
    font-family: 'Lato';
    margin-top: 4px;
    color: grey;
  }
`

export type UserAvatarPropType = {
  name: string
  imageUrl: string
} & React.ComponentProps<typeof UserAvatarWrap>

const UserAvatar = (props: UserAvatarPropType) => {
  const { name, imageUrl, ...rest } = props
  return (
    <UserAvatarWrap {...rest}>
      <StyledImage
        src={imageUrl}
        width="61"
        height="61"
        alt={`${name} avatar`}
      />
      <h5>{name}</h5>
    </UserAvatarWrap>
  )
}

export { UserAvatarWrap, UserAvatar }
