"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("./config/environment");
const express_1 = tslib_1.__importDefault(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const database_1 = require("./config/database");
const routes_1 = tslib_1.__importDefault(require("./routes"));
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.default);
const { PORT = 3500 } = process.env;
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
    database_1.sequelize.authenticate();
});
//# sourceMappingURL=server.js.map