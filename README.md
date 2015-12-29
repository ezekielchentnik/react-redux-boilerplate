# React Redux Boilerplate

## Installation

``` bash
$ npm install && npm start
```

### Development

``` bash
$ npm start
```
The Webpack dev server will run on [localhost:4080](http://localhost:4080).

### Build

``` bash
$ npm run build
```

### Testing

``` bash
$ npm test
```
``` bash
$ npm test:watch
```

### Linting

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
│   └── css                 # postcss/sass syntax
│   └── images              # static image assets
│   └── js                  # react/redux source
│     ├── actions           # redux actions
│     ├── components        # react components
│     ├── constants         # constants
│     ├── containers        # containers
│     ├── reducers          # reducers
│     ├── store             # redux configureStore
│     ├── utils             # utilities/helpers
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


## Stack

  - [React](http://facebook.github.io/react/)
  - [Redux](https://github.com/gaearon/redux)
  - [Babel](https://babeljs.io/)
  - [ESLint](http://eslint.org/)
  - [Webpack](http://webpack.github.io/)

## License

MIT

