Konsilos
========

## Developing:

1. Install meteor: https://www.meteor.com/install
2. Install NVM: https://github.com/creationix/nvm#installation
3. Install Node: `nvm install 4.4.7` (locked version is needed for production's docker container)
4. Install some dependencies to help development not covered by meteor: `npm install`
5. Start the app by running: `bin/dev` in the project's root folder
6. Open [http://127.0.0.1:3000](http://127.0.0.1:3000) in your browser

## Deploying:

Deploy workflow created based in [this guide](http://meteortips.com/deployment-tutorial/digitalocean-part-1/).

Deploying the app:

1. `meteor npm install` (only if dependencies have changed)
2. `npm run mup setup` (only if server configuration has changed)
3. `npm run mup deploy`

## Testing:

`npm test` (Right now we're only linting our code. We shall start writing unit tests as soon we launch the MVP)
