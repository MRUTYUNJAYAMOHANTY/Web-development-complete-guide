const express = require('express');
const app = express();
// app.use((req, res, next) => {
//   console.log(`First middleware`);
//   next();
// });
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
