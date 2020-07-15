"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const User_1 = tslib_1.__importDefault(require("../models/User"));
class UserService {
    constructor() {
        this.createUser = (userData) => new Promise((resolve, reject) => User_1.default.create(userData)
            .then((response) => resolve(response))
            .catch((error) => reject(error)));
        this.getUsers = () => new Promise((resolve, reject) => User_1.default.findAll()
            .then((response) => resolve(response))
            .catch((error) => reject(error)));
        this.getUserByUsername = (username) => new Promise((resolve, reject) => User_1.default.findOne({
            where: {
                username,
            },
        })
            .then((response) => resolve(response))
            .catch((error) => reject(error)));
        this.getUserById = (id) => new Promise((resolve, reject) => User_1.default.findByPk(id)
            .then((response) => resolve(response))
            .catch((error) => reject(error)));
    }
}
exports.default = UserService;
//# sourceMappingURL=UserService.js.map