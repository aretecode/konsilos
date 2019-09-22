# Konsilos

**A non-rofit organization.**
We created this with good intentions, to scratch our itch, hoping this also would benefit people all over the world.

- [https://konsilos.now.sh](https://konsilos.now.sh)
- [TODOS](./TODO.md)


## how to run

1. use [vscode](https://code.visualstudio.com/) (_for the best experience_)
1. use **nodejs** `12.10.0` (_or **latest**_)
2. `npm i` or `yarn` (_install dependencies_)
3. (if you do not have already) `npm i -g typescript jest prettier`
4. run app or storybook
  - `yarn dev` (_app_)
  - `yarn dev:server` (_for using auth0 locally via custom next server_)
  - `yarn dev:storybook` (_storybook_)

## folder structure
  - `/pages` contains pages, and the nextjs specific `_app` & `_document`
  - `/server` nextjs server using expressjs, added so we can handle route for auth0/user-signin
  - `/src` all non `page` code
    - `/components` react components. each component _SHOULD_ have:
      - `NAME.test.tsx` jest tests
      - `NAME.story.tsx`
    - `/features` react components same as ^, but with domain knowledge
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
