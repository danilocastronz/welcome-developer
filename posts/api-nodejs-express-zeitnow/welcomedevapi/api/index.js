const express = require("express");
const app = express();

// routers reference
const thrillerRouter = require("./components/thriller/router");
const crimeRouter = require("./components/crime/router");
const comedyRouter = require("./components/comedy/router");
const dramaRouter = require("./components/drama/router");
const fantasyRouter = require("./components/fantasy/router");

// root route
app.get("/", function(req, res) {
  res.json({
    success: true,
    msg: "This is our Welcome, developer! API"
  });
});

// simplest middleware
app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

// register routes
app.use("/shows/thriller", thrillerRouter);
app.use("/shows/crime", crimeRouter);
app.use("/shows/comedy", comedyRouter);
app.use("/shows/drama", dramaRouter);
app.use("/shows/fantasy", fantasyRouter);

// handler for 404 - Resource not found
app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`);
  res.json({
    success: true,
    msg: "We think you are lost!"
  });
});

// handler for 500 - Error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.json({
    success: false,
    msg: "Something went wrong!"
  });
});

module.exports = app;