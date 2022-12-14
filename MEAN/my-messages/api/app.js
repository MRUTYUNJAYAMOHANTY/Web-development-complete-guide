const express = require('express');
const bodyParser = require('body-parser');
const app = express();
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
  const post = req.body;
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
