import express from "express";

import UserController from "./controllers/UserController";
import MovieController from "./controllers/MovieController";

const route = express.Router();

route.get("/", UserController.getUsers);
route.get("/username", UserController.getUserById);
route.post("/createUser", UserController.createUser);

route.get("/search/:title", MovieController.searchByTitle);
route.get("/title/:id", MovieController.getTitleById);

export default route;
