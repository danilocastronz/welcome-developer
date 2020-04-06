const express = require("express");
const router = express.Router();

const controller = require("./controller");

router.get("/", controller.getShow);

router.use((req, res, next) => {
  res.status(404).json({ success: false, message: "Page not found!" });
});

module.exports = router;