import * as React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { StyledLink } from '../src/components/Link'
import { StyledPageHeader } from '../src/components/PageHeader'

const CreditsPageWrapper = styled.div`
  header {
    font-weight: bold;
  }
  a {
    text-decoration: underline;
  }
  li {
    list-style: disc;
  }
  main {
    padding: 1rem;
    min-height: 75vh;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`

export default () => {
  const { t } = useTranslation()
  return (
    <CreditsPageWrapper>
      <StyledPageHeader>{t('page_title__open_source')}</StyledPageHeader>
      <main>
        <section>
          <header>contributors</header>
          <ul>
            <li>
              <StyledLink href="https://github.com/lfilho">Luiz</StyledLink>
            </li>
            <li>
              <StyledLink href="https://github.com/mfrohberg">
                Michael
              </StyledLink>
            </li>
            <li>
              <StyledLink href="https://github.com/cra2ycoder">
                Mohan
              </StyledLink>
            </li>
            <li>
              <StyledLink href="https://github.com/balankarthikeyan">
                Ironman
              </StyledLink>
            </li>
            <li>
              <StyledLink href="https://github.com/aretecode">James</StyledLink>
            </li>
            <li>
              <StyledLink href="https://github.com/aretecode/konsilos/graphs/contributors">
                See the complete list
              </StyledLink>
            </li>
          </ul>
        </section>
        <section>
          <header>libraries</header>
        </section>
        <ul>
          <li>
            <StyledLink href="https://github.com/picturepan2/">
              devices.css (0.1.6)
            </StyledLink>
          </li>
          <li>
            <StyledLink href="https://www.sketchappsources.com/free-source/2101-all-coutry-flags-kit-sketch-freebie-resource.html">
              svg flags
            </StyledLink>
          </li>
          <li>
            <StyledLink href="https://github.com/konsilos/konsilos">
              konsilos meteor
            </StyledLink>
          </li>
          <li>
            <StyledLink href="https://github.com/aretecode/react-starter">
              aretecode react starter
            </StyledLink>
          </li>
          <li>
            <StyledLink href="https://github.com/aretecode/konsilos/blob/merge/package.json#L55">
              see the dependencies list for more
            </StyledLink>
          </li>
        </ul>
        <section>
          <header>tools</header>
          <ul>
            <li>
              <StyledLink href="https://jakearchibald.github.io/svgomg/">
                svg optimizer
              </StyledLink>
            </li>
          </ul>
        </section>
        <section>
          <header>stock photos</header>
          <ul>
            <li>
              <StyledLink href="https://pixabay.com/photos/family-sunset-beach-happiness-2611748/">
                family at the beach
              </StyledLink>
            </li>
            <li>
              <StyledLink href="https://pixabay.com/photos/family-children-woman-man-happy-591581/">
                family children woman happy
              </StyledLink>
            </li>
            <li>
              <StyledLink href="https://pixabay.com/photos/hands-friendship-friends-children-2847508/">
                friendship hands
              </StyledLink>
            </li>
          </ul>
        </section>
      </main>
    </CreditsPageWrapper>
  )
}
