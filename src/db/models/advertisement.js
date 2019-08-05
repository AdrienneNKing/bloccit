'use strict';
module.exports = (sequelize, DataTypes) => {
  const Advertisement = sequelize.define('Advertisement', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Advertisement.associate = function(models) {
      Advertisement.hasMany(models.Banner, {
        foreignKey: "advertisementId",
        as: "banners",
      });
      Advertisement.hasMany(models.Rule, {
        foreignKey: "advertisementId",
        as: "rules",
      });
    };

  return Advertisement;
};
