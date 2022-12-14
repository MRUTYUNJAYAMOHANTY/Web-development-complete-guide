const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');
const app = express();
mongoose.set('strictQuery', true);
mongoose
  .connect(
    'mongodb+srv://lucky:Znkxvm4JFNzNxHMU@meanclusture.hq1rfzv.mongodb.net/node-angular'
  ) //In URL node-angular is data base.Can be change simply changing in URL
  .then(() => {
    console.log('connected to mongodb database');
  })
  .catch(() => {
    console.log('connection failed!');
  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// CORS MIDDLEWARE
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});
app.post('/api/posts', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  post.save(); //create new entry/document.document is stored in collections.Name of collection will be plural form and all small letter of model name
  console.log(post);
  res.status(201).json({
    message: 'Posts added successfully',
  });
});
app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'fadfswe',
      title: 'first-server-side-posts',
      content: 'This is coming from server',
    },
    {
      id: 'ksuieqse',
      title: 'second-server-side-posts',
      content: 'This is coming from another server',
    },
  ];
  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: posts,
  });
});
module.exports = app;
