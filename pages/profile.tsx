import * as React from 'react'
import styled from 'styled-components'
import { Image } from '../src/components/Image'
import { useAuth0, Auth0NavBar } from '../src/components/Auth0'

const StyledAuth0NavBar = styled(Auth0NavBar)`
  margin: 0 auto;
  background: #f27059;
  color: #fff;
  padding: 2rem;

  button {
    color: #fff;
    text-decoration: underline;
  }
`

const Profile = (props: {}) => {
  const { loading, user } = useAuth0()

  if (process.env.NODE_ENV !== 'production') {
    console.log({ user })
  }

  if (loading || !user) {
    return (
      <div {...props}>
        <StyledAuth0NavBar />
        <main>
          <span>Loading...</span>{' '}
          <small>(please login again if this takes too long)</small>
        </main>
      </div>
    )
  }

  const picture = user.picture || ''
  const emails = user.emails || [{ value: '' }]
  const name = user.name || {}

  return (
    <div {...props}>
      <StyledAuth0NavBar />
      <main>
        <Image src={picture} alt="Profile" />
        <h2>{name.givenName}</h2>
        <p>{emails[0].value}</p>
      </main>
    </div>
  )
}

const StyledProfile = styled(Profile)`
  main {
    padding: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`

export default StyledProfile
