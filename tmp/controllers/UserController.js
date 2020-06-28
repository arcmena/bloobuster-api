"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const UserService_1 = tslib_1.__importDefault(require("../services/UserService"));
const POST = {
    createUser: async (req, res) => {
        try {
            const { username, name, email, password } = req.body;
            const userService = new UserService_1.default();
            const hashcode = await bcrypt_1.default.hash(password, 8);
            await userService
                .createUser({ username, name, email, password: hashcode })
                .then((user) => res.status(201).send(user))
                .catch((error) => res.status(500).send(error));
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
    login: async (req, res) => {
        try {
            const { username, password } = req.body;
            const userService = new UserService_1.default();
            const user = await userService.getUserByUsername(username);
            if (!user || !(await bcrypt_1.default.compare(password, user.password)))
                throw new Error("Credentials don't match");
            const { id, name, email } = user;
            res.status(200).send({ user: { id, name, username, email } });
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
};
const GET = {
    getUsers: async (req, res) => {
        try {
            const userService = new UserService_1.default();
            const users = await userService.getUsers();
            res.status(200).send({ users });
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
    getUserByUsername: async (req, res) => {
        try {
            const { username } = req.params;
            const userService = new UserService_1.default();
            const user = await userService.getUserByUsername(username);
            if (!user) {
                res.status(400).send({
                    error: `No user found with the username ${username}`,
                });
            }
            res.status(200).send(user);
        }
        catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
};
exports.default = Object.assign(Object.assign({}, GET), POST);
//# sourceMappingURL=UserController.js.map