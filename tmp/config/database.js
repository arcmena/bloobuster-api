"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const { DB_DATABASE, DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const sequelize = new sequelize_typescript_1.Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "postgres",
    logging: false,
    models: [`${__dirname}/../models`],
});
exports.sequelize = sequelize;
//# sourceMappingURL=database.js.map