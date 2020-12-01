# bootstrap-api

> A sample to bootstrap your api with [nodejs](https://nodejs.org/)

Written in [typescript](https://www.typescriptlang.org/), uses [express](https://www.npmjs.com/package/express), [jest](https://www.npmjs.com/package/jest), [prettier](https://prettier.io/), [eslint](https://eslint.org/)...

### Try it

You can directly create a repository on Github with this template. Go on [this repo](https://github.com/mleralec/bootstrap-api) and click on the _Use this template_ button

Or by cloning this project:

```
git clone https://github.com/mleralec/bootstrap-api.git
cd bootstrap-api
yarn
cp .env.example .env
yarn dev
```

### Available scripts

- **dev**: to launch src/server.ts in development mode
- **watch**: to run `dev` command with watch files
- **build**: to create a build in dist/ folder
- **prod**: to launch dist/server.js file in production mode
- **test**: to test with jest
- **lint**: to lint with eslint

### Git hooks (with husky)

A pre-push hook is called when you use `git push` command. You can disable it inside package.json file
