import { Request, Response } from "express";
import bcrypt from "bcrypt";

import UserService from "../services/UserService";

// TODO: CREATE GENERATE TOKEN METHOD IN LOGIN

const POST = {
    createUser: async (req: Request, res: Response) => {
        try {
            const { username, name, email, password } = req.body;

            const userService = new UserService();

            const hashcode = await bcrypt.hash(password, 8);

            await userService
                .createUser({ username, name, email, password: hashcode })
                .then((user) => res.status(201).send(user))
                .catch((error) => res.status(500).send(error));
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },

    login: async (req: Request, res: Response) => {
        try {
            const { username, password } = req.body;

            const userService = new UserService();

            const user = await userService.getUserByUsername(username);

            if (!user || !(await bcrypt.compare(password, user.password)))
                throw new Error("Credentials don't match");

            const { id, name, email } = user;

            res.status(200).send({ user: { id, name, username, email } });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
};

const GET = {
    getUsers: async (req: Request, res: Response) => {
        try {
            const userService = new UserService();

            const users = await userService.getUsers();

            res.status(200).send({ users });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },

    getUserByUsername: async (req: Request, res: Response) => {
        try {
            const { username } = req.params;

            const userService = new UserService();

            const user = await userService.getUserByUsername(username);

            if (!user) {
                res.status(400).send({
                    error: `No user found with the username ${username}`,
                });
            }

            res.status(200).send(user);
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
};

export default { ...GET, ...POST };
