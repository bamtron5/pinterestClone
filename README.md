# ooo, Pintresting...

Before you commit, lint:
`npm run build`

Install some npm globals if you have not done so
`npm i -g typescript webpack nodemon`

Define your `.env` in the root of your proj
```
PORT=3000
MONGO_URI=mongodb://localhost:27017/webpackComponentsOne
SESSION_SECRET=secretkey
ROOT_URL=http://localhost:3000
TWITTER_KEY=yourTwitterAppID
TWITTER_SECRET=yourTwitterAppSecret
ADMIN_EMAIL=youremail@email.com
ADMIN_USERNAME=admin
ADMIN_PASSWORD=password
```

Commands
```
npm start
npm run preinstall
npm run postinstall
npm run analyze
npm run build:client
npm run build:sass
npm run build
npm run build:prod
npm run dev
npm run lint
npm run serve
npm run debug
npm run inspect
```

Additional setup:

Get a twitter API key:
https://apps.twitter.com/

Known bugs:

1. I am currently unaware of how to wait for express to load before I open the browser.  So refresh your page.

2. Websockets `reload` package is not `browser sync` like `lite-server`.  It will light up your console.


TODO:

1. ~~Bootstrap~~

2. API w/ JSON Datasets

3. ~~express-session auth~~

4. AUTH core component and UNAUTH core component

5. ~~Webpack import sass~~

6. Webpack html template caching

7. Treeshaking <- google it

8. Webpack import HTML templates

9. Deployment build

10. Websockets server

11. ~~Hot module loading in webpack dev server. (unlikely)~~

12. ~~Twitter OAuth~~

13. ~~HTML script injection~~

14. Separate API and Client deployments w/ trust proxy

15. Roles w/ connect-roles

16. Flash messages from express and passport
