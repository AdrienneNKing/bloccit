"use strict";
 module.exports = (sequelize, DataTypes) => {
   var Flair = sequelize.define("Flair", {
     name: DataTypes.STRING,

     name: {
       type: DataTypes.STRING,
       allowNull: false
     },
     color: DataTypes.STRING,
     color: {
       type: DataTypes.STRING,
       allowNull: false
     },

     topicId: {
       type: DataTypes.INTEGER,
       allowNull: false
     }
   }, {});
   Flair.associate = function(models) {

    Flair.belongsTo(models.Topic, {
       foreignKey: "topicId",
       onDelete: "CASCADE"
     });
   };
   return Flair;
 };
