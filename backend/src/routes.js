const { Router } = require("express");
const routers = new Router();

const UserController = require("./controllers/UserController");

routers.post("/create", UserController.createUser);

module.exports = routers;
