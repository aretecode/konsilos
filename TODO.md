
## todo

> note that these are ordered numerically, but they may be completed in a different order

## 0. critical
- [x] add README instructional (_merge from both, add new_)
- [x] merge git histories
- [x] project dependency setup
- [ ] stories for the components
  - [x] initial stories for split out components
  - [x] stories for components still in pages (_mostly done anyway_)
  - [x] better stories (_customization etc_)
- [ ] write unit tests & puppeteer/cypress tests (_@note, as this for fun, without designs or requirements [which will be experimented with as it's being done] will start with minimal tests and add, without TDD_)
- [ ] security audit

## 1. cleanup
- [ ] move static data out of `welcome` page
- [ ] component code right now is structured in the way that is easiest to read & change (_single files_), properly separate if our end requirement ends up following such a standard
- [ ] move libs out to keep codebase minimal
- [ ] `{ "src": ".storybook/config.ts", "use": "now-static-build-storybook" }` add back to `now.json` builds

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
  - [x] scribe icon (_feather - same as logo_)
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
  - [ ] **type** (_life, travel, the badge/flag_)
- [ ] finish styles
  - [ ] color & size of icons
  - [ ] aligning devices
  - [ ] rotate grid of example advice
- [x] move `@import` out of `AppStyles.ts`
- [ ] add content to devices
- [x] put images on sirv
- [ ] update css background & `img src` links to use sirv images
- [ ] use responsive `Picture` from `modern-web-stack-portfolio` (_a fork of react-starter_)


# 3. api
- [ ] advice
  - [ ] `/advices`
  - [ ] `/giveAdvice`
  - [ ] `/updateAdvice` (_lock icon_)
- [ ] user
  - [x] auth0 connection (_this turned out to be more time consuming than anticipated, had to deploy as a separate software-as-a-service app with express configured to respect the proxy & now routing respecting it, client secrets, whitelisted domain configuring, etc_)
  - [ ] signin
  - [ ] signout
- [ ] family
  - [ ] `/family`
  - [ ] `/addFamily`
- [~] subscribe (_is it needed? because we have login now_)

# 4. advice page
- [x] init
- [ ] connect with api
- [x] state management
- [ ] tests


# 5. forms
- [ ] tests
- [x] stories
- [ ] show **required** in ui
- [x] use a library or add minimal implementation (_went for minimal version that is easy to change_)
- [ ] add family
  - [x] init
  - [x] styled
  - [ ] other todos #!
- [ ] add advice
  - [x] init
  - [x] styled
  - [ ] other advice #!

# 6. i18n
- [x] language switcher #!!
  - [x] svg icons for pt, en, in
  - [x] dropdown functionality (_or any better UI_)
  - [x] state handling
  - [ ] persist (_store in idb_)
- [ ] add tests
  - [x] simple
  - [ ] advanced
- [x] add lib
- [x] translations
  - [x] pt
  - [x] en
- [ ] pages
  - [x] welcome
  - [x] advice
  - [x] family
  - [x] footer
  - [x] nav
  - [ ] fixture/constant/default data
  - [ ] form translations


# 7. family page
- [x] create
- [ ] fill in requirements

# 8. polish
- [x] stock photos on family & advice
- [ ] unlock icon animation
- [ ] animate language switcher
- [ ] add photos to devices


# 9. lower priority
- [ ] extract any `@todo` comments
- [ ] footer
  - [ ] footer icons (_google play - these are ready but not needed_)
  - [x] footer copyright
- [ ] about page
- [ ] browser support notice for older non evergreen browsers
- [ ] dark mode
- [ ] basic SEO (_`modern-stack-portfolio`_)
  - [x] manifest.json
  - [ ] sitemap.xml
- [ ] add donation link (_github, paypal_)
- [ ] contributor guidelines
- [x] credits page (_open source credits, authors_)

# 10. future features
- [ ] schema.org rich snippets
- [ ] put MD todos into github issues & project plan & assign
- [ ] move to org
- [ ] slack/discord
- [ ] knock out project plan
- [ ] advice v2
  - [ ] edit
- [ ] family members
  - [ ] associate family members with users so they can get the notifications
  - [ ] update data model for ^ (_e-mail, user id_)
- [ ] notifications
  - [ ] setup data model for notifications
  - [ ] integrate client side notifications (_html5_)
- [ ] responsive image using sirv (_if not using picture_) `<script src="https://scripts.sirv.com/sirv.js"></script>`
- [ ] speedtest passing with flying colours
- [ ] ada compliance
- [ ] profile page
- [ ] (zeit) micro auth0
- [ ] move uuid to server
