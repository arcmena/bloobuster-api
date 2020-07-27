import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import UserService from "../services/UserService";

const GET = {
    getUsers: async (_req: Request, res: Response) => {
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

    getUserById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const userService = new UserService();

            console.log(id);

            const user = await userService.getUserById(Number(id));

            if (!user) {
                res.status(400).send({
                    error: `No user found with the id ${id}`,
                });
            }

            const { name, email } = user;

            res.status(200).send({ user: { name, email } });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },

    refreshToken: (req: Request, res: Response) => {
        const { id, username, email } = req.body;

        const token = jwt.sign(
            { id, username, email },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d",
            }
        );

        return res.status(200).send({ token, user: { id, username, email } });
    },
};

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

            const { id, email, name } = user;

            const token = jwt.sign(
                { id, username, email },
                process.env.JWT_SECRET,
                {
                    expiresIn: "1d",
                }
            );

            res.status(200).send({
                token,
                user: { id, username, name, email },
            });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    },
};

export default { ...GET, ...POST };
