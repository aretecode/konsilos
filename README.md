# how to run

1. use [vscode](https://code.visualstudio.com/) (_for the best experience_)
1. use **nodejs** `12.10.0` (_or **latest**_) 
2. `npm i` or `yarn` (_install dependencies_)
3. (if you do not have already) `npm i -g typescript jest prettier`
4. run app or storybook
  - `yarn dev` (_app_)
  - `yarn dev:storybook` (_storybook_)

# folder structure
  - `/pages` contains pages, and the nextjs specific `_app` & `_document`
  - `/server` nextjs server using expressjs, added so we can handle route for auth0/user-signin
  - `/src` all non `page` code
    - `/components` react components. each component _SHOULD_ have:
      - `NAME.test.tsx` jest tests
      - `NAME.story.tsx`
    - `/graphql` graphql specific code (_apollo, queries, mutations_)
    - `/utils` utils that can be moved to separate packages
    - `AppStyles` styled components global styles
    - `AppContext` provided by `pages/_app` via nextjs, available to all components (_things like `url` of the page_)
    - `typings` typescript definitions

## more scripts
  - see [package.json](./package.json)
  - `yarn test` (_jest_)
  - `yarn lint` (_lint_)

## more information
- stack:
  - [nextjs](https://nextjs.org/)
  - [typescript](https://www.typescriptlang.org)
  - [react](https://reactjs.org)
  - [styled-components](https://www.styled-components.com)
  - [apollo graphql](https://www.apollographql.com/)
- tool stack:
  - [jest unit tests](https://jestjs.io)
  - [storybook](https://storybook.js.org)
  - [zeit now](https://zeit.co/)
  - [travis ci](https://travis-ci.org/)
  - [makefile](https://gist.github.com/isaacs/62a2d1825d04437c6f08)
  - [yarn](https://yarnpkg.com/lang/en/)
  - [babeljs](https://babeljs.io)
  - [docker](https://www.docker.com)
- formatting & quality check tools:
  - [prettier](https://prettier.io/)
  - [eslint](https://eslint.org)
  - [stylelint](https://github.com/stylelint/stylelint)
  - [dangerjs](https://github.com/danger/danger/blob/master/Dangerfile)
  - [editorconfig](https://editorconfig.org)

# todo 

> note that these are ordered numerically, but they may be completed in a different order

## 0. critical
- [ ] add README instructional (_merge from both, add new_)
- [x] merge git histories
- [x] project dependency setup
- [ ] stories for the components
  - [x] initial stories for split out components
  - [ ] stories for components still in pages
  - [ ] better stories (_customization etc_)
- [ ] write unit tests & puppeteer/cypress tests (_@note, as this for fun, without designs or requirements [which will be experimented with as it's being done] will start with minimal tests and add, without TDD_)

## 1. cleanup
- [ ] move static data out of `welcome` page
- [ ] component code right now is structured in the way that is easiest to read & change (_single files_), properly separate if our end requirement ends up following such a standard
- [ ] put MD todos into github issues & project plan & assign


## 2. homepage sections
- [x] initial rough outline of page
  - [x] leaderboard
  - [x] grid 
  - [x] legacy
  - [x] coloured features with images
  - [x] devices section
- [x] devices as a component (css or svg)
- [ ] subscribe 
  - [x] initial ui
  - [ ] polished & responsive
  - [ ] submit event handling on signup form
- [ ] svg icons
  - [x] `MaterialIcon` component (_from `modern-web-stack-portolio`_)
  - [x] write list of them here
  - [ ] scribe icon (_feather - same as logo_)
  - [x] lock 
  - [x] unlock
  - [x] notification/bell
  - [x] timer
  - [x] facebook
  - [x] github
  - [x] twitter
  - [x] close 
  - [x] video 
  - [x] chat/message
  - [x] plane/bag/trip/travel
  - [x] clock
- [ ] finish styles
  - [ ] color & size of icons
  - [ ] aligning devices
  - [ ] rotate grid of example advice
- [ ] move `@import` out of `AppStyles.ts`
- [ ] add content to devices
- [ ] put images on sirv 
- [ ] update css background & `img src` links to use sirv images
- [ ] use responsive `Picture` from `modern-web-stack-portfolio` (_a fork of react-starter_)


# 3. api
- [ ] advice
  - [ ] `/advices`
  - [ ] `/giveAdvice`
  - [ ] `/updateAdvice` (_lock icon_)
- [ ] user
  - [x] auth0 connection
  - [ ] signin
  - [ ] signout
- [ ] family
  - [ ] `/family`
  - [ ] `/addFamily`
- [~] subscribe (_is it needed? because we have login now_)

# 4. advice page
- [ ] create

# 5. forms
- [ ] use a library or add minimal implementation
- [ ] add family 
  - [ ] styled
  - [ ] other todos #!
- [ ] add advice
  - [ ] styled
  - [ ] other advice #!

# 6. i18n
- [ ] language switcher #!!
  - [ ] svg icons for pt, en, in
  - [ ] dropdown functionality (_or any better UI_)
  - [ ] state handling (_store in idb_)
- [ ] add tests
- [ ] add lib
- [ ] translations
  - [ ] pt 
  - [ ] en 
  - [ ] hindi
- [ ] ada compliance
- [ ] speedtest passing with flying colours

# 7. family & profile page
- [ ] create
- [ ] fill in requirements

# 8. lower priority
- [ ] extract any `@todo` comments
- [ ] unlock icon animation
- [ ] footer
  - [ ] footer icons
  - [ ] footer copyright
- [ ] credits page (_open source credits, authors_)
  - [material icons](https://material.io/resources/icons/)
  - [konsilos meteor](https://github.com/konsilos/konsilos)
  - [react starter](https://github.com/aretecode/react-starter)
  - [svg optimizer](https://jakearchibald.github.io/svgomg/)
  - [devices.css](https://github.com/marvelapp/devices.css)
- [ ] about page
- [ ] browser support notice for older non evergreen browsers
- [ ] dark mode
- [ ] basic SEO (_`modern-stack-portfolio`_)
  - [ ] manifest.json
  - [ ] sitemap.xml
