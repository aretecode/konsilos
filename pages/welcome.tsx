/**
 * @file @todo @see /README#1_home
 */
import * as React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { StyledAdviceList } from '../src/features/Advice'
import { StyledDevice } from '../src/components/Device'
import { StyledMaterialIcon } from '../src/components/MaterialIcons'
import { LanguageSwitcher } from '../src/components/LanguageSwitcher'
import { StyledLogo } from '../src/components/Logo'
import { ScribeIcon } from '../src/components/Media'
import { DEFAULT_ADVICE_LIST } from '../src/constants'

const StyledMain = styled.main``

const StyledLeaderboard = styled.section`
  background: url('https://pencamcc.sirv.com/Images/home/konsilos-background.jpg?format=webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 60% center;

  color: #fff;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;

  h1,
  p {
    width: 55%;
  }

  @media (max-width: 1023px) {
    h1,
    p {
      width: 70%;
    }
  }

  @media (max-width: 760px) {
    h1,
    p {
      width: 100%;
    }
  }

  h1 {
    margin: 0;
    font-size: 4.5rem;
    font-weight: 300;
    line-height: 4.5rem;
    text-shadow: 0 0 2px #0e0806;
    margin-bottom: 3rem;
  }

  p {
    font-size: 1.2rem;
    font-weight: 300;
    margin: 3rem 0;
  }

  form {
    display: flex;

    input {
      border: none;
      width: 300px;
      height: 50px;
      border-radius: 4px;
      font-size: 1rem;
    }

    button {
      height: 50px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 3.2rem;
      line-height: 3.2rem;
    }

    form {
      flex-direction: column;

      button,
      input {
        width: 100%;
      }

      button {
        margin: 1.5rem 0;
      }
    }
  }
`

const StyledLeaderboardPanel = styled.div`
  max-width: calc(100% - 15%);
  margin: auto;

  @media (max-width: 480px) {
    max-width: calc(100% - 12%);
  }
`

const StyledSubscribeAction = styled.a`
  margin: 0;
  padding: 1rem 3rem;
  background: var(--color-blue);
  text-align: center;
  border-radius: 4px;
  font-size: 1rem;
  text-transform: uppercase;
  color: #fff;
  min-width: 250px;
  text-decoration: none;
`
const StyledBanner = styled.header.attrs({
  role: 'banner',
})`
  padding: 2rem 0rem 0 0rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  max-width: calc(100% - 15%);
  margin: auto;

  > nav {
    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      width: 4rem;
      height: 2rem;
    }
  }
`

const StyledTimeCapsuleAction = styled.a`
  background-color: var(--color-orange);
  border-radius: 4px;
  padding: 0.5rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;

  ${StyledMaterialIcon} {
    fill: #fff;
    margin-right: 4px;
  }
`

export type ColouredFeatureSectionPropType = { position: number }

const StyledArticleFeatureSection = styled.section`
  position: relative;
  max-width: calc(100% - 15%);
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 5rem;

  @media (max-width: 1023px) {
    flex-direction: column;
    max-width: calc(100% - 12%);

    .text {
      width: 100% !important;
      text-align: center;
      margin-bottom: 3rem;
    }
  }

  > .text {
    width: 40%;
  }

  header {
    font-size: 2rem;
    font-weight: 600;
    color: #000000;
  }

  p {
    color: grey;
  }
`

const StyledMacbookPanel = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  svg {
    width: 100%;
  }

  @media (max-width: 1023px) {
    width: 100%;
  }
`

const StyledIpadPanel = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  svg {
    width: 100%;
  }
`

const StyledArticleFeatureMacbookSection = styled(StyledArticleFeatureSection)``

const StyledArticleFeatureIPadSection = styled(StyledArticleFeatureSection)`
  > .text {
    @media (max-width: 1023px) {
      order: -1;
    }
  }

  ${StyledMaterialIcon} {
    width: 100px;
    height: 100px;
    fill: var(--color-blue);
  }
`

const StyledArticleOverview = styled.section`
  max-width: calc(100% - 15%);
  margin: auto;
  padding-bottom: 3rem;

  header {
    padding: 4rem 0 2rem 0;
    font-size: 3rem;
    line-height: 48px;
    color: var(--color-blue);
    font-weight: 600;
    text-align: center;
  }

  p {
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    color: grey;
  }

  @media (max-width: 480px) {
    max-width: calc(100% - 12%);
  }
`
const StyledArticle = styled.article`
  background: #fff;
`

const StyledColouredFeaturePanel = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 3rem 5rem;

  @media (max-width: 1023px) {
    width: 70%;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 3rem;
  }
`

const StyledColouredFeatureImagePanel = styled.div`
  width: 50%;
  background-image: url('https://pencamcc.sirv.com/Images/home/konsilos_woman_holding_child.jpg?format=webp');
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1023px) {
    width: 30%;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 380px;
  }
`

const StyledColouredFeatureImagePanel2 = styled(
  StyledColouredFeatureImagePanel
)`
  background-image: url('https://pencamcc.sirv.com/Images/home/konsilos_man_mountain_backpack.jpg?format=webp');
  background-position: center;

  @media (max-width: 767px) {
    order: -1;
  }
`

const StyledColouredFeatureSection = styled.section`
  background-color: ${(props: ColouredFeatureSectionPropType) =>
    props.position === 1
      ? 'var(--color-blue-dark)'
      : 'var(--color-orange-dark)'};

  color: #ffffff;
  display: flex;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  header {
    font-size: 3rem;
    line-height: 40px;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    line-height: 25px;
  }

  ${StyledSubscribeAction} {
    margin: 0;
    background: #fff;
    color: black;
    max-width: 200px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

const StyledScribeIcon = styled(ScribeIcon)`
  width: 100px;
  height: 100px;
  fill: var(--color-blue);
`

const StyledCardTextSection = styled.section`
  margin: auto;
  text-align: center;
  padding: 0 5.3rem 0 3rem;
  display: flex;
  flex-direction: column;

  header {
    font-size: 3rem;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 2rem;
    color: #f27059;
  }

  p {
    margin: auto;
    text-align: center;
    color: grey;
    font-size: 1rem;
    font-weight: 400;
    margin-top: 1rem;
  }
`
const StyledAdviceListWithPromo = styled.article`
  display: flex;
  position: relative;
  overflow: hidden;
  min-height: 75vh;

  ${StyledCardTextSection} {
    z-index: 2;
    margin-left: 50%;
    overflow: hidden;
    background: rgb(236, 239, 241, 0.8);

    @media (max-width: 1023px) {
      margin-left: 25vw;
      margin: auto;
      padding: 3rem 2rem;
      background: rgb(236, 239, 241, 1);
    }
  }

  ${StyledSubscribeAction} {
    margin-top: 2rem;
  }

  ${StyledAdviceList} {
    transform: rotate(30deg) translateX(-39%) translateY(8%) scale(0.8);
    transform: rotate(30deg) translateX(-27%) translateY(7%);
    position: absolute;
    top: 0;
    left: -20%;
    z-index: 0;

    ul {
      flex-wrap: nowrap;
      flex-flow: wrap;
      display: grid;
      grid-template-columns: auto auto auto auto;
      grid-gap: 0.5rem 0.5rem;
      > li {
        max-width: 250px;
        margin: 0;
      }
    }
  }
`

const SubscribeAction = (props: {}) => {
  const { t } = useTranslation()
  return (
    <StyledSubscribeAction href={'/auth/login'}>
      {t('subscribe')}
    </StyledSubscribeAction>
  )
}

export default () => {
  const { t } = useTranslation()
  return (
    <>
      <StyledBanner>
        <StyledLogo />
        <nav>
          <StyledTimeCapsuleAction href="/advice">
            <StyledMaterialIcon icon="clock" />
            {t('time_capsule')}
          </StyledTimeCapsuleAction>
          <LanguageSwitcher />
        </nav>
      </StyledBanner>
      <StyledMain>
        <StyledLeaderboard>
          <StyledLeaderboardPanel>
            <h1>{t('eternalize_advice__title')}</h1>
            <p>{t('eternalize_advice__body')}</p>
            <SubscribeAction />
          </StyledLeaderboardPanel>
        </StyledLeaderboard>
        <StyledAdviceListWithPromo>
          <StyledAdviceList list={DEFAULT_ADVICE_LIST} />
          <StyledCardTextSection>
            <header>{t('leave_your_legacy__title')}</header>
            <p>{t('leave_your_legacy__body_1')}</p>
            <p>{t('leave_your_legacy__body_2')}</p>
            <SubscribeAction />
          </StyledCardTextSection>
        </StyledAdviceListWithPromo>
        <StyledArticle>
          <StyledArticleOverview>
            <header>{t('simple__title')}</header>
            <p>{t('simple__body')}</p>
          </StyledArticleOverview>
          <StyledArticleFeatureMacbookSection>
            <div className="text">
              <StyledScribeIcon />
              <header>{t('macbook_section__title')}</header>
              <p>{t('macbook_section__body')}</p>
            </div>
            <StyledMacbookPanel>
              <StyledDevice type="macbook">
                <img
                  className="device-content"
                  src="https://pencamcc.sirv.com/Images/stock/family-hands.jpg?format=webp"
                />
              </StyledDevice>
            </StyledMacbookPanel>
          </StyledArticleFeatureMacbookSection>
          <StyledArticleFeatureIPadSection>
            <StyledIpadPanel>
              <StyledDevice type="ipad">
                <img
                  className="device-content"
                  src="https://pencamcc.sirv.com/Images/screenshots/add-family.png?format=webp"
                />
              </StyledDevice>
            </StyledIpadPanel>
            <div className="text">
              <StyledMaterialIcon icon="notification" />
              <header>{t('ipad_section__title')}</header>
              <p>{t('ipad_section__body')}</p>
            </div>
          </StyledArticleFeatureIPadSection>
        </StyledArticle>
        <>
          <StyledColouredFeatureSection position={0}>
            <StyledColouredFeatureImagePanel />
            <StyledColouredFeaturePanel>
              <header>
                {t('features_free__title_1')}
                <br />
                {t('features_free__title_2')}
              </header>
              <p>{t('features_free__body')}</p>
              <SubscribeAction />
            </StyledColouredFeaturePanel>
          </StyledColouredFeatureSection>
          <StyledColouredFeatureSection position={1}>
            <StyledColouredFeaturePanel>
              <header>
                {t('features_privacy__title_1')}
                <br />
                {t('features_privacy__title_2')}
              </header>
              <p>{t('features_privacy__body')}</p>
              <SubscribeAction />
            </StyledColouredFeaturePanel>
            <StyledColouredFeatureImagePanel2 />
          </StyledColouredFeatureSection>
        </>
      </StyledMain>
    </>
  )
}
