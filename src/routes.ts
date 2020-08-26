import express from 'express';

// Controllers
import UserController from './controllers/UserController';
import ApiController from './controllers/ApiController';
import PostController from './controllers/PostController';

// Middlewares
import isLoggedIn from './middlewares/isLoggedIn';

const route = express.Router();

// Admin User
route.get('/users/all', UserController.getUsers);

// Client User
route.get('/refreshToken', isLoggedIn, UserController.refreshToken);
route.get('/getUser/:id', isLoggedIn, UserController.getUserById);
route.get('/user/:username', isLoggedIn, UserController.getUserByUsername);
route.post('/createUser', UserController.createUser);
route.post('/login', UserController.login);

// Post
route.get('/post/:id', isLoggedIn, PostController.getPostById);
route.get('/posts', isLoggedIn, PostController.getPosts);
route.post('/post/createPost', isLoggedIn, PostController.createPost);

// IMDb API
route.get('/index', isLoggedIn, ApiController.index);
route.get('/movieIndex', isLoggedIn, ApiController.movieIndex);
route.get('/search/:title', isLoggedIn, ApiController.searchByTitle);
route.get('/title/:id', isLoggedIn, ApiController.getTitleById);

export default route;
