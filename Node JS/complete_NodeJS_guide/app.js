const http = require('http');
//const routes = require('./routes');
//console.log(routes.someText);
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//const server = http.createServer(routes.handler);
app.use(bodyParser.urlencoded({ extended: false })); // register middle wire
app.use('/add-product', (req, res, next) => {
  console.log('In the first middleware');
  // next(); //Allows the request to continue the next middleware inline
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});
app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});
app.use('/', (req, res, next) => {
  console.log('In the second middleware');
  res.send('<h1>Hello from express js!</h1>');
});
const server = http.createServer(app);
app.listen(3000);
//server.listen(3000);
