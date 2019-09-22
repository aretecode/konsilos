import * as React from 'react'
import styled from 'styled-components'
import { AddFamily, StyledFamilyList } from '../src/features/Family'

const FamilyPageWrapper = styled.section`
  h1 {
    margin: auto;
    font-size: 2rem;
    background: #f27059;
    color: white;
    padding: 2rem;
  }

  form {
    width: 50%;
    max-width: 500px;
    padding: 0rem;
    display: flex;
    flex-direction: column;

    @media (max-width: 767px) {
      margin: auto;
      width: 100%;
    }
  }
`

const FormWrapper = styled.div`
  background-image: url('https://pencamcc.sirv.com/Images/home/konsilos_man_mountain_backpack.jpg?format=webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-start;
  padding: 2rem 4rem;
  height: 500px;
  box-sizing: border-box;
`

export default () => {
  return (
    <FamilyPageWrapper>
      <h1>Family</h1>
      <FormWrapper>
        <AddFamily />
      </FormWrapper>
      <StyledFamilyList />
    </FamilyPageWrapper>
  )
}
