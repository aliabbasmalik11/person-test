'use strict';
module.exports = (sequelize, DataTypes) => {
  var Person = sequelize.define('Person', {
    name: DataTypes.STRING,
    surName:  DataTypes.STRING,
    gender:  DataTypes.STRING,
    birthday:  DataTypes.STRING,
    phone:  DataTypes.STRING,
    email:  DataTypes.STRING,
  }, {});
  // Person.associate = function(models) {
  //   // associations can be defined here
  //   Person.hasMany(models.Contact,{
  //     foreignKey: 'PersonId',
  //     as: 'contacts'
  //   });
  //
  //   Person.hasMany(models.Contact,{
  //     foreignKey: 'RefId',
  //     as: 'mycontacts'
  //   });
  //
  // };
  return Person;
};
