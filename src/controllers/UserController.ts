import { Request, Response } from "express";

import UserService from "../services/UserService";

// TODO: CREATE PASSWORD ENCRYPTION

const POST = {
    createUser: async (req: Request, res: Response) => {
        try {
            const { username, name, email, password } = req.body;

            const userService = new UserService();

            await userService
                .createUser({ username, name, email, password })
                .then((user) => res.status(201).send(user))
                .catch((error) => res.status(500).send(error));
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

            res.status(200).send({ thebois: users });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },

    getUserById: async (req: Request, res: Response) => {
        try {
            const { username } = req.params;

            const userService = new UserService();

            const user = await userService.getUserById(username);

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
