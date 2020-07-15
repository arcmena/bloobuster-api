import {
    Table,
    Model,
    Column,
    ForeignKey,
    BelongsTo,
} from "sequelize-typescript";

import User from "./User";

export interface ReviewInterface {
    authorId: number;
    content: string;
    titleId: string;
    title: string;
    titleImg: string;
}

@Table({ tableName: "review" })
export default class Review extends Model<Review> implements ReviewInterface {
    @ForeignKey(() => User)
    @Column
    authorId: number;

    @Column
    content: string;

    @Column
    titleId: string;

    @Column
    title: string;

    @Column
    titleImg: string;

    @BelongsTo(() => User)
    authorInfo: User;
}
