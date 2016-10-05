Konsilos
========

## Developing:

1. Install meteor: https://www.meteor.com/install
2. Install NVM: https://github.com/creationix/nvm#installation
3. Install Node 6: `nvm install 6`
4. Install some dependencies to help development not covered by meteor: `npm install`
5. Start the app by running: `meteor` in the app's folder
6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deploying:

Follow the guide here: http://meteortips.com/deployment-tutorial/digitalocean-part-1/

In short:

First time, installing mup and configuring it:

1. `npm i -g mup`
2. `mkdir .deploy && cd .deploy && mup init`

Subsequent times, deploying the app:

1. `mup setup`
2. `meteor npm install`
3. `mup deploy`

## Testing:

`npm test` (Right now we're only linting our code. We shall start writing unit tests as soon we launch the MVP)
