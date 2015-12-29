# React Redux Boilerplate

A boilerplate built with react & redux to spin up fantastic micro apps.

## Features

React, Redux, Webpack, PostCSS, Babel 6, npm scripts ...

### Installation

``` bash
$ git clone https://github.com/ezekielchentnik/react-redux-boilerplate.git
$ npm install && npm start
```

#### Development

``` bash
$ npm start
```
The Webpack dev server will run on [localhost:4080](http://localhost:4080).

#### Build

``` bash
$ npm run build
```

#### Testing

``` bash
$ npm test
```
``` bash
$ npm test:watch
```

#### Linting

``` bash
$ npm run lint
```

## Structure

``` bash

├── dist                    # built dist
│   └── css                 
│   └── images              
│   └── js                  
│   └── index.html          
├── src                     # source
│   └── css                 # css/sass, compiled w/postcss
│   └── images              # .png,.svg,.gif optimized w/webpack
│   └── js                  # react/redux source
│     ├── actions           # redux actions, w/thunk
│     ├── components        # react components
│     ├── constants         # constants
│     ├── containers        # containers
│     ├── reducers          # reducers
│     ├── selectors         # selectors, using reselect
│     ├── store             # store, w/devtools & prod config
│     ├── utils             # utilities/helpers, support immatable
│     └── index.js          # app entry
│   └── index.html          # app shell
├── test
│   └── setup.js            # jsdom config
├── .*                      # dotfiles
├── devServer.js            # webpack/express dev server
├── package.json            # npm
├── README.md               # installation, usage
├── webpack.config.dev.js   # config for dev, hot loading, devtools, etc.
└── webpack.config.prod.js  # config for prod, minification, etc.

```


## Tech stack

  - [React](http://facebook.github.io/react/)
  - [Redux](https://github.com/gaearon/redux)
  - [reselect](https://github.com/rackt/reselect)
  - [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)
  - [Webpack](http://webpack.github.io/)
  - [immutable](https://facebook.github.io/immutable-js/)
  - [redux-thunk](https://github.com/gaearon/redux-thunk)
  - [keyMirror](https://github.com/STRML/keyMirror)
  - express
  - postcss
  - [Babel](https://babeljs.io/)
  - [ESLint](http://eslint.org/)
  - [mocha](https://mochajs.org/)

## License

MIT

