"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
const Review_1 = tslib_1.__importDefault(require("./Review"));
const Post_1 = tslib_1.__importDefault(require("./Post"));
let User = class User extends sequelize_typescript_1.Model {
};
tslib_1.__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Unique(true),
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], User.prototype, "username", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], User.prototype, "name", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Unique(true),
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.AllowNull(false),
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.HasMany(() => Review_1.default),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "review", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.HasMany(() => Post_1.default),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "post", void 0);
User = tslib_1.__decorate([
    sequelize_typescript_1.Table({ tableName: "users" })
], User);
exports.default = User;
//# sourceMappingURL=User.js.map