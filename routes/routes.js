const routes = require("express").Router();
const TaskController = require("../controller/TaskController")

routes.get("/home", TaskController.getALL)

module.exports = routes