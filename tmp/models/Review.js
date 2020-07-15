"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = tslib_1.__importDefault(require("./User"));
let Review = class Review extends sequelize_typescript_1.Model {
};
tslib_1.__decorate([
    sequelize_typescript_1.ForeignKey(() => User_1.default),
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", Number)
], Review.prototype, "authorId", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Review.prototype, "content", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Review.prototype, "titleId", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Review.prototype, "title", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.Column,
    tslib_1.__metadata("design:type", String)
], Review.prototype, "titleImg", void 0);
tslib_1.__decorate([
    sequelize_typescript_1.BelongsTo(() => User_1.default),
    tslib_1.__metadata("design:type", User_1.default)
], Review.prototype, "user", void 0);
Review = tslib_1.__decorate([
    sequelize_typescript_1.Table({ tableName: "review" })
], Review);
exports.default = Review;
//# sourceMappingURL=Review.js.map