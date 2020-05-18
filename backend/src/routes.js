const { Router } = require("express");
const routers = new Router();

const SessionController = require("./controllers/SessionController")
const UserController = require("./controllers/UserController");
const auth = require("./middlewares/auth");

routers.post("/createAccount", UserController.createUser);
routers.post("/login", SessionController.login);
routers.post("/reset", UserController.recoveryPassword);
routers.get("/user", auth.auth, UserController.viewUser);
routers.put("/user/update", auth.auth, UserController.updateUser)

module.exports = routers;