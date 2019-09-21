/**
 * @file @todo @see /README#1_home
 */
import * as React from 'react'
import styled from 'styled-components'
import { StyledDevice } from '../src/components/Device'
import { StyledCardListGrid } from '../src/components/CardListGrid'
import { StyledMaterialIcon } from '../src/components/MaterialIcons'
import { LanguageSwitcher } from '../src/components/LanguageSwitcher'
import { DEFAULT_ADVICE_LIST } from '../src/constants'

const StyledMain = styled.main`
  * {
    font-family: 'Lato';
  }
`

const StyledLeaderboard = styled.section`
  background: url('https://konsilos.com/img/landing/main_bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  color: #ffffff;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  /* align-items: center; */
  justify-content: center;

  h1,
  p {
    width: 55%;
  }

  h1 {
    margin: 0;
    font-size: 5rem;
    font-weight: 300;
    line-height: 80px;
    text-shadow: 0 0 2px #0e0806;
    margin-bottom: 3rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: 300;
  }

  form {
    display: flex;

    input {
      border: none;
      width: 300px;
      border-radius: 4px;
      font-size: 1rem;
    }
  }
`

const StyledLeaderboardPanel = styled.div`
  max-width: calc(100% - 15%);
  margin: auto;
`

const StyledSubscripeInput = styled.input.attrs({
  placeholder: 'email',
})`
  padding: 0 1rem;
`
const StyledSubscribeButton = styled.button`
  margin: 0 2rem;
  padding: 1rem 2rem;
  background: #23c0ff;
  text-align: center;
  border-radius: 4px;
  font-size: 1rem;
  text-transform: uppercase;
`
const StyledBanner = styled.header.attrs({
  role: 'banner',
})`
  padding: 2rem 1rem 0 1rem;
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

const StyledLogo = styled.img.attrs({
  src: 'https://konsilos.com/img/landing/logo.png',
  width: '163',
  height: '102',
  alt: 'logo',
})``

const StyledTimeCapsuleButton = styled.button`
  background-color: #f27059;
  border-radius: 4px;
  padding: 0.5rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${StyledMaterialIcon} {
    fill: white;
    margin-right: 4px;
  }
`

export type ColouredFeatureSectionPropType = { position: number }

const StyledArticleFeatureSection = styled.section`
  position: relative;
  height: 540px;
  max-width: calc(100% - 15%);
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > .text {
    width: 50%;
  }

  ${StyledDevice} {
    transform: scale(0.5);
    transform-origin: 0% 50%;
    position: absolute;
    top: 0;
    margin: auto;
    bottom: 0;
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
  height: 100%;
  padding: 0 3rem;
`

const StyledIpadPanel = styled.div`
  width: 50%;
  height: 100%;
`

const StyledArticleFeatureMacbookSection = styled(StyledArticleFeatureSection)``
const StyledArticleFeatureIPadSection = styled(StyledArticleFeatureSection)`
  ${StyledMaterialIcon} {
      width: 100px;
      height: 100px;
      fill: #21c0fd;
  }
`

const StyledArticleOverview = styled.section`
  /* padding: 0 5rem 5rem 5rem; */
  max-width: calc(100% - 15%);
  margin: auto;

  header {
    padding: 3rem 0 2rem 0;
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
`
const StyledArticle = styled.article`
  background: #ffffff;
`

const StyledColouredFeaturePanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledColouredFeatureSection = styled.section`
  background-color: ${(props: ColouredFeatureSectionPropType) =>
    props.position === 1 ? '#20ade6' : '#da6550'};

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

const CardTextSection = styled.section`
  margin: auto;
  max-width: calc(100% - 15%);
  text-align: center;
  padding-bottom: 3rem;

  header {
    color: white;
    font-size: 3rem;
    font-weight: 600;
    text-transform: capitalize;
  }

  p {
    color: white;
    font-size: 1rem;
    font-weight: 400;
  }
`

export default () => (
  <>
    <StyledBanner>
      <StyledLogo />
      <nav>
        <StyledTimeCapsuleButton>
          <StyledMaterialIcon icon="clock" /> Time Capsule
        </StyledTimeCapsuleButton>
        <LanguageSwitcher />
      </nav>
    </StyledBanner>
    <StyledMain>
      <StyledLeaderboard>
        <StyledLeaderboardPanel>
          <h1>Eternize advices to your children</h1>
          <p>
            Think of all advices and experiences that have impacted you
            positively. Now image your children's future if you could share all of
            these in the right moment of their lives.
          </p>
          <form>
            <StyledSubscripeInput />
            <StyledSubscribeButton type="submit">Subscribe</StyledSubscribeButton>
          </form>
        </StyledLeaderboardPanel>
      </StyledLeaderboard>
      <StyledCardListGrid list={DEFAULT_ADVICE_LIST} />
      <CardTextSection>
        <header>Leave your legacy</header>
        <p>
          Think about advices, books, movies, experiences and everything else
          that helped you become a better and more prepared person. Now imagine
          being able to transform them in powerful and inspiring advices to your
          children too! We want to help you remember to share them in the right
          occasion or the ideal age, even if you are not there anymore.
        </p>
        <p>
          We want to help you remember to share them in the right occasion or
          the ideal age, even if you are not there anymore.
        </p>
      </CardTextSection>
      <StyledArticle>
        <StyledArticleOverview>
          <header>Simple. Powerful. Konsilos.</header>
          <p>
            We believe good advices can change people. Konsilos is an initiative
            to encourage parents to eternize advices to their children through
            an easy platform, secure and free. From a computer or mobile device,
            anyone can create an account, start to register advices, be notified
            in the future and let everything to their children eternized in time
            capsules.
          </p>
        </StyledArticleOverview>
        <StyledArticleFeatureMacbookSection>
          <div className="text">
            <img
              src="https://konsilos.com/img/landing/img2.jpg"
              width="78"
              height="68"
              alt="img"
            />
            <header>Register Several Advices</header>
            <p>
              They can be about life, books to be read, movies to be watched or
              whatever you want. Choose who will receive the advice and point
              out why it matters. You can edit them at any time.
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
              You are in control. You decide when and we will remind you to give
              an advice. It can be a specific date or when your children reach a
              certain age. Additionally, your children will be able to access
              all advices in time capsule programmed by you. Just imagine their
              reaction when seeing different advices being unlocked in different
              moments of their lives.
            </p>
          </div>
        </StyledArticleFeatureIPadSection>
      </StyledArticle>
      <>
        <StyledColouredFeatureSection position={0}>
          <img src="https://konsilos.com/img/landing/man_img.jpg" />
          <StyledColouredFeaturePanel>
            <header>
              Free,
              <br /> Forever!
            </header>
            <p>
              We're a nonprofit and open source initiative, thought and built by
              volunteers who share our values from different places around the
              world. We also benefit from the support from people and companies
              that believe in our idea.
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
              Security, privacy, backup, freedom and availability. Only you and
              your children have access to the advices. And you are free to
              download your advices and leave the system at any time.
            </p>
          </StyledColouredFeaturePanel>
          <img src="https://konsilos.com/img/landing/child_img.jpg" />
        </StyledColouredFeatureSection>
      </>
    </StyledMain>
  </>
)
