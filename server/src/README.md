- https://auth0.com/blog/next-js-authentication-tutorial/
- https://auth0.com/blog/create-a-simple-and-secure-node-express-app/
- https://github.com/auth0-blog/whatabyte-portal-node-express/blob/master/part2/whatabyte-portal/index.js
- https://github.com/passport-next/passport/wiki#differences-between-passport-and-passport-next


### todo
```ts
const passport = process.env.IS_DEV_SERVER
  ? require('@passport-next/passport')
  : require('passport')
```
