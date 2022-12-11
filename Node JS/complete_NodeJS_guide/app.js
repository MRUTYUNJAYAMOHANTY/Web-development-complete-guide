const http = require('http');
//const routes = require('./routes');
//console.log(routes.someText);
const express = require('express');
const app = express();
//const server = http.createServer(routes.handler);
app.use('/', (req, res, next) => {
  console.log('This always runs');
  next(); //Allows the request to continue the next middleware inline
});
app.use('/add-product', (req, res, next) => {
  console.log('In the first middleware');
  // next(); //Allows the request to continue the next middleware inline
  res.send('<h1> The "Product tag" page </h1>');
});
app.use('/', (req, res, next) => {
  console.log('In the second middleware');
  res.send('<h1>Hello from express js!</h1>');
});
const server = http.createServer(app);
app.listen(3000);
//server.listen(3000);
