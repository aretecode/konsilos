Konsilos
========

## What is Konsilos?

Read our website www.konsilos.com to understand what we do and then come back...

So, our intention is to be a non-for-profit organization. We created this with good intentions, to scratch our own each, hoping this would benefit more people all over the world too. Hence why our code is also open source.

Being a non-for-profit, alas, doesn't mean we don't have costs. We have had paid from our own pockets some costs with things like designers, PSD slicing companies and hosting companies so far. So any monetary donation is appreciated and would be solely used for covering Konsilo's aforementioned costs (and future ones like hosting). If you would like to contribute, check the section below.

## How can I contribute?

- Coding.
    - Check the issues pages for bugs and features requests and volunteer to work on them ;-)
    - Improve tests coverage
    - Improve code and architecture quality in any way you think
    - All of the above are to be done via Pull Requests and are subject to the creator's approval, as any open source project.
- Money.
    - Donate to help us keep the servers up and running. We use Digital Ocean to host us at the moment.
- Translations. Check the `i18n` folder and see how translations are done and then contribute to your own language.
- UI & UX. Feel free to improve things in those aereas as well
- Anything else - what else could you help us with?


## Setting up for development:

1. Install meteor: https://www.meteor.com/install
2. Install NVM: https://github.com/creationix/nvm#installation
3. Install Node: `nvm install 4.4.7` (locked version is needed for production's docker container)
4. Install some dependencies to help development not covered by meteor: `meteor npm install`
5. Start the app by running: `bin/dev` in the project's root folder
6. Open [http://127.0.0.1:3000](http://127.0.0.1:3000) in your browser

## Deploying:

Deploying the app (only for developers with the proper permissions):

1. `meteor npm install` (only if dependencies have changed)
2. `npm run mup setup` (only if server configuration has changed)
3. `npm run mup deploy`

## Testing:

`npm test` (Right now we're only linting our code. We shall start writing unit tests as soon we launch the MVP)
