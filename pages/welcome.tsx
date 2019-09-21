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

  color: #fff;
  padding: 10rem 0 0 1rem;
  min-height: 100vh;
  min-width: 100vw;

  h1,
  p {
    width: 50%;
  }
  h1 {
    margin: 0;
    padding: 0 0 34px 0;
    font-weight: 600;
    font-size: 60px;
    line-height: 80px;
    color: #ffffff;
    text-shadow: 0 0 2px #0e0806;
  }
  p {
    font-size: 16px;
  }
  form {
    margin-top: 4rem;
    display: flex;

    input {
      border: none;
    }
  }
`

const StyledSubscripeInput = styled.input.attrs({
  placeholder: 'email',
})`
  padding: 1rem;
`
const StyledSubscribeButton = styled.button`
  margin: 0 2rem 0 0.75rem;
  padding: 1rem 2rem;
  background: #23c0ff;
  text-align: center;
  border-radius: 4px;
  display: inline-flex;
  color: #fff;
  font-weight: normal;
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

  > nav {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -3rem;

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
`

export type ColouredFeatureSectionPropType = { position: number }

const StyledArticleFeatureSection = styled.section`
  display: flex;
  padding: 1rem 1rem;
  position: relative;
  height: 540px;

  > .text {
    width: 50%;
  }
  > ${StyledDevice} {
    margin: 0 4rem;
    transform: scale(0.5);
    transform-origin: 0 0;
    position: absolute;
    top: 0;
    right: -40%;
  }
  header {
    font-size: 2rem;
    color: #000;
  }
`

const StyledArticleFeatureMacbookSection = styled(StyledArticleFeatureSection)`
  > .text {
    padding-left: 4rem;
    width: 40%;
  }
  > ${StyledDevice} {
    right: -40%;
  }
`
const StyledArticleFeatureIPadSection = styled(StyledArticleFeatureSection)`
  > .text {
    padding-right: 4rem;
    margin-left: 50%;
  }
  > ${StyledDevice} {
    left: 5%;
  }
`

const StyledArticleOverview = styled.section`
  padding: 0 5rem 5rem 5rem;
  header {
    padding: 3rem 0 2rem 0;
    font-size: 48px;
    line-height: 48px;
    color: var(--color-blue);
    font-weight: normal;
    text-align: center;
  }
  p {
    text-align: center;
  }
`
const StyledArticle = styled.article`
  background: #fff;
`

const StyledColouredFeatureSection = styled.section`
  background-color: ${(props: ColouredFeatureSectionPropType) =>
    props.position === 1 ? '#20ade6' : '#da6550'};

  color: #fff;
  display: flex;
  img {
    width: 50%;
    object-fit: cover;
  }
  header {
    padding: 3rem 3rem 0 3rem;
    font-size: 40px;
    line-height: 40px;
    width: 80%;
  }
  p {
    padding: 1rem 3rem;
    letter-spacing: 1px;
    font-size: 1rem;
    line-height: 25px;
    width: 80%;
  }
`

const CardTextSection = styled.section`
  padding: 1rem;
  width: 50%;
  header {
    color: #23c0ff;
    font-size: 3rem;
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

      <>
        <StyledColouredFeatureSection position={0}>
          <img src="https://konsilos.com/img/landing/man_img.jpg" />
          <div>
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
          </div>
        </StyledColouredFeatureSection>
        <StyledColouredFeatureSection position={1}>
          <div>
            <header>
              Your Advices,
              <br /> Forever Yours
            </header>
            <p>
              Security, privacy, backup, freedom and availability. Only you and
              your children have access to the advices. And you are free to
              download your advices and leave the system at any time.
            </p>
          </div>
          <img src="https://konsilos.com/img/landing/child_img.jpg" />
        </StyledColouredFeatureSection>
      </>

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
          <StyledDevice type="macbook">eh</StyledDevice>
        </StyledArticleFeatureMacbookSection>
        <StyledArticleFeatureIPadSection>
          <StyledDevice type="ipad">eh</StyledDevice>

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
    </StyledMain>
  </>
)
