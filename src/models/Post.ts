import {
    Table,
    Model,
    Column,
    AllowNull,
    ForeignKey,
    BelongsTo,
} from "sequelize-typescript";

import User from "./User";

export interface PostInterface {
    type: string;
    authorId: number;
    titleId?: string;
    content: string;
}

@Table({ tableName: "posts" })
export default class Post extends Model<Post> implements PostInterface {
    @Column
    type: string;

    @ForeignKey(() => User)
    @Column
    authorId: number;

    @BelongsTo(() => User)
    user: User;

    @AllowNull(true)
    @Column
    titleId: string;

    @Column
    content: string;
}
