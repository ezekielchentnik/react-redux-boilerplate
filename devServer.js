var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var historyApiFallback = require('connect-history-api-fallback');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use(historyApiFallback());

app.use(webpackDevMiddleware(compiler, {
  quiet: false,
  noInfo: false,
  stats: {
    colors: true
  }
}));

app.use(webpackHotMiddleware(compiler));

app.listen(4080, 'localhost', function(error) {

  if (error) {
    console.error(error);
  }else{
    console.info('Listening on http://localhost:4080'); //record companies are shady
  }

});
