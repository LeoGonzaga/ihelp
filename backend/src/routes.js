const { Router } = require("express");
const routers = new Router();

const SessionController = require("./controllers/SessionController")
const UserController = require("./controllers/UserController");

routers.post("/createAccount", UserController.createUser);
routers.post("/login", SessionController.login);
routers.post("/reset", UserController.recoveryPassword);
routers.post("/reset/:token", UserController.changePassword);

module.exports = routers;
