// Load ORM
const Sequelize = require('sequelize');

// Environment variable to define the URL of the data base to use.
// To use SQLite data base:
//    DATABASE_URL = sqlite:quiz.sqlite
const url = process.env.DATABASE_URL || "sqlite:blog.sqlite";
const sequelize = new Sequelize(url);
const User = require('./user')(sequelize, Sequelize.DataTypes);
const Posts = require('./post')(sequelize, Sequelize.DataTypes);
const Attachment = require('./attachments')(sequelize, Sequelize.DataTypes);

// Relation 1-to-1 between Posts and Attachment
Posts.belongsTo(Attachment, {as: 'attachment'});
Attachment.hasOne(Posts, {as: 'post', foreignKey: 'attachmentId'});

// Relation 1-to-N between Posts and Attachment
Posts.belongsTo(User, {as: 'author'});
User.hasMany(Posts, {as: 'posts', foreignKey: 'authorId'});//al reves el as

module.exports = sequelize;