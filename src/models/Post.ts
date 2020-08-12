import { Table, Model, Column, ForeignKey, BelongsTo } from 'sequelize-typescript';

import { DataTypes } from 'sequelize';

import User from './User';

export interface PostInterface {
    authorId: number;
    content: string;
    titleId?: string;
    title?: string;
    titleImg?: string;
    rating: number;
}

@Table({ tableName: 'posts' })
export default class Post extends Model<Post> implements PostInterface {
    @ForeignKey(() => User)
    @Column
    authorId: number;

    @Column(DataTypes.TEXT)
    content: string;

    @Column
    titleId: string;

    @Column
    title: string;

    @Column
    titleImg: string;

    @Column
    rating: number;

    @BelongsTo(() => User)
    authorInfo: User;
}
