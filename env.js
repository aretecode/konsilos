/**
 * @security keys for db are here
 *
 * @todo @name DOMAIN => AUTH0_DOMAIN
 */
const env = {
  AUTH0_CALLBACK_URL: undefined,
  CLIENT_SECRET: undefined,
  AIRTABLE_API_KEY: 'keyZU3E7hyIL4gkhr',
  AIRTABLE_APP_KEY: 'appEtPntnilqHwtKW',
  CLIENT_AUTH0_CLIENT_ID: 'appEtPntnilqHwtKW',
  CLIENT_AUTH0_DOMAIN: 'dev-uvmic-9u.auth0.com',
  DOMAIN: 'dev-uvmic-9u.auth0.com',
}

Object.keys(env).forEach(key => {
  if (process.env[key] === undefined && env[key] !== undefined) {
    process.env[key] = env[key]
  }
})

exports.env = env
