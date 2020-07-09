import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const [, token] = req.headers["authorization"].split(" ");

        if (!token) {
            throw new Error("User not authorized");
        }

        jwt.verify(token, process.env.JWT_SECRET, (error, response) => {
            if (error || !response) {
                throw new Error("Invalid Token");
            }

            req.body.user = response;
            next();
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
