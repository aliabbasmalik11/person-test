'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contact = sequelize.define('Contact', {
    PersonId: DataTypes.NUMBER,
    RefId: DataTypes.NUMBER
  }, {});

  // Contact.associate= function(models) {
  //   // associations can be defined here
  //   Contact.belongsTo(models.Person, {
  //     foreignKey: 'PersonId',
  //     onDelete: 'CASCADE'
  //   })
  //
  //   Contact.belongsTo(models.Person, {
  //     foreignKey: 'RefId',
  //     onDelete: 'CASCADE'
  //   })
  // };
  return Contact;
};
