# @smnielsen/cra-template

This is the default configuration for Vanilla JavaScripts React apps used by SMNielsen. It is based on the official base template for [Create React App](https://github.com/facebook/create-react-app).

## Usage

To use this template run: 
`npx create-react-app [app-name] --template @smnielsen/cra-template`

## Extension in Template

### Linting with @smnielsen

This template uses ESLint and Prettier for linting purposes.

* [@smnielsen/eslint-config](https://www.npmjs.com/package/@smnielsen/eslint-config) - ESLint configuration
* [@smnielsen/prettier-config](https://www.npmjs.com/package/@smnielsen/prettier-config) - Prettier configuration

### Compliance with @smnielsen/cover-my-ass

This template includes a compliance test which checks all licenses of entire node_modules for licenses that is hurtful for the open source community (according to smnielsen), read more which on the project README.

* [@smnielsen/cover-my-ass](https://www.npmjs.com/package/@smnielsen/cover-my-ass)

### Routing with react-router

Routing is necessary in all major and minor applications, therefor a default routing system is setup which lazy-loads the pages. See more in the file `App/index.js`