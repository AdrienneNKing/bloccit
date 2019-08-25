"use strict";
 module.exports = (sequelize, DataTypes) => {
   var Post = sequelize.define("Post", {
     title: DataTypes.STRING,

//#1
     title: {
       type: DataTypes.STRING,
       allowNull: false
     },
     body: DataTypes.STRING,
     body: {
       type: DataTypes.STRING,
       allowNull: false
     },

//#2
     topicId: {
       type: DataTypes.INTEGER,
       allowNull: false
     }
   }, {});
   Post.associate = function(models) {
     // associations can be defined here

//#3
     Post.belongsTo(models.Topic, {
       foreignKey: "topicId",
       onDelete: "CASCADE"
     });
   };
   return Post;
 };
