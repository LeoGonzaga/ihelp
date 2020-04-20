const { Router } = require("express");
const routers = new Router();

const UserController = require("./controllers/UserController");

routers.post("/createAccount", UserController.createUser);
routers.post("/login", UserController.login);
routers.post("/reset", UserController.recoveryPassword);
routers.post("/reset/:token", UserController.changePassword);

module.exports = routers;
