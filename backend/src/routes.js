const { Router } = require("express");
const routers = new Router();

const UserController = require("./controllers/UserController");

routers.post("/createAccount", UserController.createUser);
routers.post("/login", UserController.login);

module.exports = routers;
