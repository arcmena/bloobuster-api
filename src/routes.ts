import express from "express";

import UserController from "./controllers/UserController";
import MovieController from "./controllers/MovieController";
import ReviewController from "./controllers/ReviewController";
import PostController from "./controllers/PostController";

const route = express.Router();

route.get("/users/all", UserController.getUsers);
route.get("/user/:username", UserController.getUserByUsername);
route.post("/createUser", UserController.createUser);
route.post("/login", UserController.login);

// Review
route.get("/review/:id", ReviewController.getReviewById);
route.get("/reviews", ReviewController.getReviews);
route.post("/review/createReview", ReviewController.createReview);

// Post
route.get("/post/:id", PostController.getPostById);
route.get("/posts", PostController.getPosts);
route.post("/posts/createPost", PostController.createPost);

// IMDb API
route.get("/index", MovieController.index);
route.get("/movieIndex", MovieController.movieIndex);
route.get("/search/:title", MovieController.searchByTitle);
route.get("/title/:id", MovieController.getTitleById);

export default route;
