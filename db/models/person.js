'use strict';
module.exports = (sequelize, DataTypes) => {
  var Person = sequelize.define('Person', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  // Person.associate = function(models) {
  //   // associations can be defined here
  //   Person.hasMany(models.Comment,{
  //     foreignKey: 'userId',
  //     as: 'contacts'
  //   });
  //
  // };
  return Person;
};
