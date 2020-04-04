const { Router } = require("express");
const routers = new Router();

routers.get("/", function(req, res) {
  res.send("hello aaa");
});

module.exports = routers;
