import * as React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { StyledPageHeader } from '../src/components/PageHeader'
import { GraphqlFamilyList, GraphqlAddFamily } from '../src/features/Family'

const FamilyPageWrapper = styled.section`
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

  main {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`

const FormWrapper = styled.div`
  background-image: url('https://pencamcc.sirv.com/Images/stock/family-ducks.jpg?format=webp');
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
  const { t } = useTranslation()
  return (
    <>
      <title>{'Konsilos - ' + t('page_title__family')}</title>
      <FamilyPageWrapper>
        <StyledPageHeader>{t('page_title__family')}</StyledPageHeader>
        <FormWrapper>
          <GraphqlAddFamily />
        </FormWrapper>
        <main>
          <GraphqlFamilyList />
        </main>
      </FamilyPageWrapper>
    </>
  )
}
