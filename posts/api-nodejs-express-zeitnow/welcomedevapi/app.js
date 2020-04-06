const express = require("express");
const app = express();
const api = require("./api");
const compression = require("compression");
const helmet = require("helmet");

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: true}));

app.use(compression());

app.use("/api", api);

const port = process.env.PORT || 3000

app.listen(port, () =>
  console.log(`Your API is listening to http://localhost:${port}`)
);