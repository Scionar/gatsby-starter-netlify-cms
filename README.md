# Nudging Pixels

[![Netlify Status](https://api.netlify.com/api/v1/badges/af66ef6a-72b2-459c-9743-f34346d506dc/deploy-status)](https://app.netlify.com/sites/nudging-pixels/deploys)

Home page for Nudging Pixels podcast. Page is build with [Netlify](https://www.netlify.com/), content is managed with [Netlify CMS](https://www.netlifycms.org/) and all is converted to static with [Gatsby](https://www.gatsbyjs.org/). Repository is based on [Gatsby + Netlify CMS Starter](https://github.com/netlify-templates/gatsby-starter-netlify-cms).

## Deploy

Site is deployed to URL:
[nudging-pixels.netlify.com](https://nudging-pixels.netlify.com/)

Official deploy URL is set to deploy master branch automatically on changes.

Own Netlify deploy is not needed for development. On cases where changes are not build or logs are needed, please deploy own version of this repository. This is also because Netlify teams cost money.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Scionar/nudging-pixels)

## Configure

Secrets are managed with environment variables. If env files are used, create env file depending on used environment. `/.env.development` for development environment and `/.env.production` for production. These variables need to be set also on Netlify environment.

```
# Anchor FM RSS feed URL
RSS_FEED_URL=
```

## Development

Git pre-commit hook runs Prettier formatter and tests. If tests fail, commit is prevented.

### Scripts

Install packages

```sh
npm install
```

Run development mode. Environment is by default opened into [localhost:8000](http://localhost:8000/).

```sh
npm run develop
```

## Tests

[Jest framework](https://jestjs.io/) is configured to work with project. Read more how Jest is configured from [Unit testing | Gatsby](https://www.gatsbyjs.org/docs/unit-testing/).
