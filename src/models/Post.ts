import {
    Table,
    Model,
    Column,
    ForeignKey,
    BelongsTo,
} from "sequelize-typescript";

import User from "./User";

export interface PostInterface {
    authorId: number;
    content: string;
}

@Table({ tableName: "post" })
export default class Post extends Model<Post> implements PostInterface {
    @ForeignKey(() => User)
    @Column
    authorId: number;

    @Column
    content: string;

    @BelongsTo(() => User)
    user: User;
}
