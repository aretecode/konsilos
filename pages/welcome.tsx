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
import { Logo } from '../src/components/Logo'
import { DEFAULT_ADVICE_LIST } from '../src/constants'

const StyledMain = styled.main`
  * {
    font-family: 'Lato';
  }
`

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

      button, input {
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

const StyledSubscripeInput = styled.input.attrs({
  placeholder: 'email',
})`
  padding: 0 1rem;
`
const StyledSubscribeButton = styled.button`
  margin: 0 2rem;
  padding: 1rem 2rem;
  background: var(--color-blue);
  text-align: center;
  border-radius: 4px;
  font-size: 1rem;
  text-transform: uppercase;
  color: white;
  min-width: 200px;
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

const StyledLogo = styled(Logo)`
  width: 163px;
  height: 102px;
  fill: #ffffff;
  position: relative;
  left: -30px;

  @media (max-width: 480px) {
    width: 80px;
    left: 0px;
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

  ${StyledMaterialIcon} {
    fill: #fff;
    margin-right: 4px;
  }
`

export type ColouredFeatureSectionPropType = { position: number }

const StyledArticleFeatureSection = styled.section`
  position: relative;
  height: 400px;
  max-width: calc(100% - 15%);
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1023px) {
    flex-direction: column;
    max-width: calc(100% - 12%);
    height: 550px;

    .text {
      width: 100% !important;
      text-align: center;
      margin-bottom: 3rem;
    }
  }

  > .text {
    width: 50%;
  }

  ${StyledDevice} {
    margin: auto;
    transform: scale(0.3);
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
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1023px) {
    width: 100%;
  }

  ${StyledDevice} {
    margin: auto;
    transform: scale(0.3);
    transform-origin: center right;

    @media (max-width: 1023px) {
      transform-origin: center top;
    }
  }
`

const StyledIpadPanel = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1023px) {
    width: 100%;
  }

  ${StyledDevice} {
    margin: auto;
    transform: scale(0.3);
    transform-origin: center left;
    
    @media (max-width: 1023px) {
      transform-origin: center top;
    }
  }
`

const StyledArticleFeatureMacbookSection = styled(StyledArticleFeatureSection)``

const StyledArticleFeatureIPadSection = styled(StyledArticleFeatureSection)`
  @media (max-width: 1023px) {
    height: 700px;
  }

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
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledColouredFeatureSection = styled.section`
  background-color: ${(props: ColouredFeatureSectionPropType) =>
    props.position === 1
      ? 'var(--color-blue-dark)'
      : 'var(--color-orange-dark)'};

  color: #ffffff;
  display: flex;

  img {
    width: 50%;
    object-fit: cover;
  }

  header {
    padding-left: 3rem;
    font-size: 3rem;
    line-height: 40px;
    font-weight: 600;
  }

  p {
    padding: 1rem 3rem;
    font-size: 1rem;
    line-height: 25px;
  }
`

const StyledScribeIcon = styled(StyledMaterialIcon).attrs({
  icon: 'Scribe' as any,
  path:
    'M1.2.1C.7.5 0 1.6 0 2.5v1.8l2.2.1V20.6l.1.2c.2 1 1 1.7 1.8 1.8.3 0 12.2 1.5 13.9 1.4 1.7-.2 1.9-1.6 1.9-3.1l-.1-.7c-.1-.3-.2-.4-.5-.5h-.7v-4.6l.8-.2a8 8 0 0 0 3.5-3l1-1.6a1 1 0 0 0 0-1c-.3-.2-1.4-.5-2.5-.7h-2.8V2.4c-.1-1.1-.5-1.5-1.2-2l-.7-.2C16.2.2 1.5-.2 1.2.2zm16.5 2.4v6.2l-.5.3c-.8.3-1.6 1.1-2 2l-.4 1c-.2 1-.4 1.2-1 1.5-.6.2-.6.7-.5.9 0 .1.4.2 1 0 .5-.2.5-.2 1 0 .4.3 2 .7 2 .7h.4v4.7H6c-.3 0-.5.4-.6.9l-.2 1h-.8c-.3-.2-.6-.4-.7-.8-.2-.2-.2.4-.2-8.5V1l13.4.2c.5.2.8.5 1 1.2zM5.4 8c-.2.1-.3.3-.3.6 0 .2.2.4.4.5h8.3c.6 0 .6-1 .1-1.1H5.4zM2.3 3.4H1.2L1.3 2c.2-.6.4-.9.6-.9h.4v2.3zm3.2 1.7H14c.3-.2.4-.8 0-1L14 4H5.6c-.6.2-.6.8 0 1.1zm16.8 5c0 .3-.1.7-1 1.5-.6.8-1.3 1.5-2.2 1.8-.6.3-1.6.3-3 0-.3 0-.5-.1-.5-.4 0-.3.4-1 1-2 .7-.7 1.3-1.1 2-1.3l1.4-.1h1.3c.3 0 1 .2 1 .5zM5.5 13.7h4.4c.5-.1.5-.8.1-1l-.1-.1H5.6c-.6.2-.6 1-.1 1.1zm13 8.4c-.4.8-.7.8-2.7.7l-10-1.3c-.1-.5 0-.8.3-.9h12.4c.5.2.5.8 0 1.5z',
})`
  width: 100px;
  height: 100px;
  fill: var(--color-blue);
`

const StyledCardTextSection = styled.section`
  margin: auto;
  text-align: center;
  padding: 0 5.3rem 0 3rem;

  header {
    font-size: 3rem;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 2rem;
  }

  p {
    margin: auto;
    /* max-width: calc(100% - 15%); */
    text-align: center;

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

  ${StyledSubscribeButton} {
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
            <h1>Eternize advices to your children</h1>
            <p>
              Think of all advices and experiences that have impacted you
              positively. Now image your children's future if you could share
              all of these in the right moment of their lives.
            </p>
            <form>
              <StyledSubscripeInput />
              <StyledSubscribeButton type="submit">
                Subscribe
              </StyledSubscribeButton>
            </form>
          </StyledLeaderboardPanel>
        </StyledLeaderboard>
        <StyledAdviceListWithPromo>
          <StyledAdviceList list={DEFAULT_ADVICE_LIST} />
          <StyledCardTextSection>
            <header>Leave your legacy</header>
            <p>
              Think about advices, books, movies, experiences and everything
              else that helped you become a better and more prepared person. Now
              imagine being able to transform them in powerful and inspiring
              advices to your children too! We want to help you remember to
              share them in the right occasion or the ideal age, even if you are
              not there anymore.
            </p>
            <p>
              We want to help you remember to share them in the right occasion
              or the ideal age, even if you are not there anymore.
            </p>
            <StyledSubscribeButton type="submit">
              Subscribe
            </StyledSubscribeButton>
          </StyledCardTextSection>
        </StyledAdviceListWithPromo>
        <StyledArticle>
          <StyledArticleOverview>
            <header>Simple. Powerful. Konsilos.</header>
            <p>
              We believe good advices can change people. Konsilos is an
              initiative to encourage parents to eternize advices to their
              children through an easy platform, secure and free. From a
              computer or mobile device, anyone can create an account, start to
              register advices, be notified in the future and let everything to
              their children eternized in time capsules.
            </p>
          </StyledArticleOverview>
          <StyledArticleFeatureMacbookSection>
            <div className="text">
              <StyledScribeIcon />
              <header>Register Several Advices</header>
              <p>
                They can be about life, books to be read, movies to be watched
                or whatever you want. Choose who will receive the advice and
                point out why it matters. You can edit them at any time.
              </p>
            </div>
            <StyledMacbookPanel>
              <StyledDevice type="macbook">eh</StyledDevice>
            </StyledMacbookPanel>
          </StyledArticleFeatureMacbookSection>
          <StyledArticleFeatureIPadSection>
            <StyledIpadPanel>
              <StyledDevice type="ipad">eh</StyledDevice>
            </StyledIpadPanel>

            <div className="text">
              <StyledMaterialIcon icon="notification" />
              <header>Notifications and Time Capsule</header>
              <p>
                You are in control. You decide when and we will remind you to
                give an advice. It can be a specific date or when your children
                reach a certain age. Additionally, your children will be able to
                access all advices in time capsule programmed by you. Just
                imagine their reaction when seeing different advices being
                unlocked in different moments of their lives.
              </p>
            </div>
          </StyledArticleFeatureIPadSection>
        </StyledArticle>
        <>
          <StyledColouredFeatureSection position={0}>
            <img src="https://pencamcc.sirv.com/Images/home/konsilos_man_mountain_backpack.jpg?format=webp" />
            <StyledColouredFeaturePanel>
              <header>
                Free,
                <br /> Forever!
              </header>
              <p>
                We're a nonprofit and open source initiative, thought and built
                by volunteers who share our values from different places around
                the world. We also benefit from the support from people and
                companies that believe in our idea.
              </p>
            </StyledColouredFeaturePanel>
          </StyledColouredFeatureSection>
          <StyledColouredFeatureSection position={1}>
            <StyledColouredFeaturePanel>
              <header>
                Your Advices,
                <br /> Forever Yours
              </header>
              <p>
                Security, privacy, backup, freedom and availability. Only you
                and your children have access to the advices. And you are free
                to download your advices and leave the system at any time.
              </p>
            </StyledColouredFeaturePanel>
            <img src="https://pencamcc.sirv.com/Images/home/konsilos_woman_holding_child.jpg?format=webp" />
          </StyledColouredFeatureSection>
        </>
      </StyledMain>
    </>
  )
}
