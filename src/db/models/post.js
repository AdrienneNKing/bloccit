"use strict";
 module.exports = (sequelize, DataTypes) => {
   var Post = sequelize.define("Post", {
     title: DataTypes.STRING,


     title: {
       type: DataTypes.STRING,
       allowNull: false
     },
     body: DataTypes.STRING,
     body: {
       type: DataTypes.STRING,
       allowNull: false
     },


     topicId: {
       type: DataTypes.INTEGER,
       allowNull: false
     }
   }, {});
   Post.associate = function(models) {

     Post.belongsTo(models.Topic, {
       foreignKey: "topicId",
       onDelete: "CASCADE"
     });

     /*Post.hasMany(models.Flair, {
       foreignKey: "postId",
       as: "flairs"
     });*/
   };
   return Post;
 };
