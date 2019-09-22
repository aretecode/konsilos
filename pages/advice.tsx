import * as React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { StyledAdviceList, AddAdvice } from '../src/features/Advice'

const AdvicePageWrapper = styled.section`
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
  background-image: url('https://pencamcc.sirv.com/Images/home/konsilos_woman_holding_child.jpg?format=webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-end;
  padding: 2rem 4rem;
`

const ThemedStyledAdviceList = styled(StyledAdviceList)`
  background-color: #23c0ff;
`

export default () => {
  const { t } = useTranslation()
  return (
    <AdvicePageWrapper>
      <h1>{t('page_title__advice')}</h1>
      <FormWrapper>
        <AddAdvice />
      </FormWrapper>
      <ThemedStyledAdviceList />
    </AdvicePageWrapper>
  )
}
