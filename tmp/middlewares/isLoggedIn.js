"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
exports.default = async (req, res, next) => {
    try {
        const [, token] = req.headers["authorization"].split(" ");
        if (!token) {
            throw new Error("User not authorized");
        }
        jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, (error, response) => {
            if (error || !response) {
                throw new Error("Invalid Token");
            }
            req.body.user = response;
            next();
        });
    }
    catch (error) {
        res.status(500).send({ error: error.message });
    }
};
//# sourceMappingURL=isLoggedIn.js.map