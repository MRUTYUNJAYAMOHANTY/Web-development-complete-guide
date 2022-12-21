const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");

const app = express();
mongoose.set('strictQuery', true);
mongoose
  .connect(
    "mongodb+srv://lucky:" +
      process.env.MONGO_ATLAS_PW +
      "@meanclusture.hq1rfzv.mongodb.net/node-angular"
     //'mongodb+srv://lucky:Znkxvm4JFNzNxHMU@meanclusture.hq1rfzv.mongodb.net/node-angular'
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use("/images", express.static(path.join("api/images")));
   // angular images uploads will be stored in api directory
  app.use("/", express.static(path.join(__dirname,"angular")));
  
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });
  
  app.use("/api/posts", postsRoutes);
  app.use("/api/user", userRoutes);
  // angular build will be stored in api directory
  app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'angular','index.html'))
  });
  module.exports = app;
  