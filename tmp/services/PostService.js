"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Post_1 = tslib_1.__importDefault(require("../models/Post"));
class PostService {
    constructor() {
        this.getPosts = () => new Promise((resolve, reject) => Post_1.default.findAll()
            .then((response) => resolve(response))
            .catch((error) => reject(error)));
        this.getPostById = (id) => new Promise((resolve, reject) => Post_1.default.findByPk(id)
            .then((response) => resolve(response))
            .catch((error) => reject(error)));
        this.createPost = (postData) => new Promise((resolve, reject) => Post_1.default.create(postData)
            .then((response) => resolve(response))
            .catch((error) => reject(error)));
    }
}
exports.default = PostService;
//# sourceMappingURL=PostService.js.map