Demo built on react + redux 
=========

Application currently in beta

## Demo 

1. [Demo](https://mc-react-app.herokuapp.com) powered by Heroku 

## How to build the app

1. Download and install [NodeJS](https://nodejs.org/en/)

2. On the console, run ``npm install``

3. Run ``npm run build`` in order to build the code inside *dist* for distribution. Run `npm run bundle-analyzer` to analyze the bundle 

4. Run ``npm run serve`` in order to launch the application for development 
   
## Backend implementation 

1. Based on [json-server](https://github.com/typicode/json-server) with mocks from [faker](https://github.com/Marak/faker.js) 

2. Run ``npm run build`` and ``npm start`` in order to launch the server (``http://localhost:3000``) with the distribution version of the app (APIs available at `http://localhost:3000/api/`) 

3. The server randomly simulates delays and errors for testing purposes

## Progressive web app 

1. The app contains a [manifest.json](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/) and the entire [service-worker](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers) business in order to cache the app (sw is enabled only for ``npm run build``)

## Libs & Tooling

1. [React](https://reactjs.org)

2. [Redux](https://redux.js.org)

3. [Redux-Saga](https://redux-saga.js.org)

4. [Typescript](https://www.typescriptlang.org/) (with ``--strict true``) 

5. [Reactstrap](https://reactstrap.github.io)

6. [Font Awesome](http://fontawesome.io)

7. [Sass](http://sass-lang.com/) 

8. [CSS Modules](https://github.com/css-modules/css-modules) 

9. [Webpack](https://webpack.js.org/) 

10. [Babel](https://babeljs.io/) 

11. [TSLint](https://palantir.github.io/tslint/) 

12. [Stylelint](https://stylelint.io/) 

13. [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) 

## CSS Modules

1. [sass-resources-loader](https://github.com/shakacode/sass-resources-loader): variables / classes in ``assets/stylesheets/base.scss`` are shared across all SASS styles

2. [typings-for-css-modules-loader](https://github.com/Jimdo/typings-for-css-modules-loader): Typescript typings for each sass file

## Unit-tests (Jest)

1. The unit-tests are written in typescript using Jest. You find all the files searching for *__.spec.ts*
 
2. On the console, run ``npm test`` for executing them 

3. Tests are also executed automatically by [Travis CI](https://travis-ci.com/)

## Working with editors/IDEs supporting “safe write”

1. Take a look at the following [page](https://webpack.github.io/docs/webpack-dev-server.html#working-with-editors-ides-supporting-safe-write) if you use IntelliJ or VIM 
