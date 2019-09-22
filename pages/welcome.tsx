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
  background-image: url("https://pencamcc.sirv.com/Images/home/konsilos_woman_holding_child.jpg?format=webp");
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

const StyledColouredFeatureImagePanel2 = styled(StyledColouredFeatureImagePanel)` 
background-image: url("https://pencamcc.sirv.com/Images/home/konsilos_man_mountain_backpack.jpg?format=webp");
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

  ${StyledSubscribeButton} {
    margin: 0;
    background: white;
    color: black;
    max-width: 200px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

const ScribeIcon = (props: any) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title key="title">Scribe/edit icon</title>
      <g fill="none" fillRule="evenodd">
        <path
          d="M12.75 13.48l1.74-.79s0-3.7 4.08-3.7c2 0 3.64.36 5.07 0 0 0-2.03 4.31-4.93 4.68 0 0-3.15.55-4.22-.98"
          stroke="#27C1FC"
          strokeWidth=".72"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g fill="#27C1FC" fillRule="nonzero">
          <path d="M18.71 13.67s-.35.06-.85.08l.02 3.77h.84l-.01-3.85z" />
          <path d="M5.74 19.1c0 .66-.07.97-.74.97h-.04c-.7 0-1.16-.56-1.16-1.25V3.76c0-.46-.17-.9-.44-1.24H16.6c.7 0 1.27.56 1.27 1.25v5.27c.23-.03.46-.04.71-.04h.14V3.76a2.1 2.1 0 0 0-2.12-2.08H1.91C.74 1.68.03 2.62.03 3.76v1.76h2.92v13.3c0 1.14.83 2.07 1.76 2.08l12.76.82c1.4 0 2.36-1.05 2.36-2.2v-2.08l-14.09.12v1.54zM2.94 4.81H.89V3.77c0-.7.33-1.25 1.03-1.25s1.04.56 1.04 1.24v1.05zm3.65 14.3v-.72l12.4-.11v1.24c0 .7-.58 1.37-1.28 1.37l-11.28-.82c.25-.34.16-.52.16-.97z" />
        </g>
        <path
          d="M13.51 6.36H5.95a.54.54 0 0 1-.54-.54c0-.3.24-.54.54-.54h7.56a.54.54 0 0 1 0 1.08zM13.51 9.26H5.95a.54.54 0 0 1-.54-.54c0-.3.24-.54.54-.54h7.56c.3 0 .54.25.54.54 0 .3-.24.54-.54.54zM10.02 12.16H5.95a.54.54 0 0 1-.54-.54c0-.3.24-.54.54-.54h4.07c.3 0 .54.25.54.54 0 .3-.24.54-.54.54z"
          fill="#27C1FC"
          fillRule="nonzero"
        />
        <path d="M0 0h24v24H0z" />
      </g>
    </svg>
  )
}

const StyledScribeIcon = styled(ScribeIcon).attrs({
  icon: 'Scribe' as any,
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
              {<StyledDevice type="macbook">eh</StyledDevice>}
            </StyledMacbookPanel>
          </StyledArticleFeatureMacbookSection>
          <StyledArticleFeatureIPadSection>
            <StyledIpadPanel>
              {<StyledDevice type="ipad">eh</StyledDevice>}
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
            <StyledColouredFeatureImagePanel />
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
              <StyledSubscribeButton type="submit">
                Subscribe
              </StyledSubscribeButton>
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
              <StyledSubscribeButton type="submit">
                Subscribe
              </StyledSubscribeButton>
            </StyledColouredFeaturePanel>
            <StyledColouredFeatureImagePanel2 />
          </StyledColouredFeatureSection>
        </>
      </StyledMain>
    </>
  )
}
