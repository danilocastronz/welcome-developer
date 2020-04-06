const express = require("express");
const data = require("./friends.json");

const getShow = (req, res, next) => {
  res.json({ success: true, data: data });
};

module.exports.getShow = getShow;
