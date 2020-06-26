import express from "express";

import UserController from "./controllers/UserController";
import MovieController from "./controllers/MovieController";

const route = express.Router();

route.get("/", UserController.getUsers);
route.get("/user/:username", UserController.getUserByUsername);
route.post("/createUser", UserController.createUser);
route.post("/login", UserController.login);

route.get("/index", MovieController.index);
route.get("/movieIndex", MovieController.movieIndex);
route.get("/search/:title", MovieController.searchByTitle);
route.get("/title/:id", MovieController.getTitleById);

export default route;
