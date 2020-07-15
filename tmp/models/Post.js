"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = tslib_1.__importDefault(require("./User"));
let Post = class Post extends sequelize_typescript_1.Model {
};
tslib_1.__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.default),
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", Number)
], Post.prototype, "authorId", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Post.prototype, "content", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.default),
    tslib_1.__metadata("design:type", User_1.default)
], Post.prototype, "user", void 0);
Post = tslib_1.__decorate([
    sequelize_typescript_1.Table({ tableName: "post" })
], Post);
exports.default = Post;
//# sourceMappingURL=Post.js.map