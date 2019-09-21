import * as React from 'react'
import styled from 'styled-components'

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

const UserAvatar = (props: { name: string; imageUrl: string }) => (
  <UserAvatarWrap>
    <img
      src={props.imageUrl}
      width="61"
      height="61"
      alt={`${props.name} avatar`}
    />
    <h5>{props.name}</h5>
  </UserAvatarWrap>
)

export { UserAvatarWrap, UserAvatar }
