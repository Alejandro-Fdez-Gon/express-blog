'use strict';

const {Model} = require('sequelize');

// Definition of the Post model:
module.exports = (sequelize, DataTypes) => {
    class Posts extends Model {
    }
    Posts.init({
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        title: {
            type: DataTypes.STRING,
            validate: {notEmpty: {msg: "Question must not be empty"}}
        },
        body: {
            type: DataTypes.STRING,
            validate: {notEmpty: {msg: "Answer must not be empty"}}
        }
        }, 
        { sequelize }
    );

    return Posts;
};