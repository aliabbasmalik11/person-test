'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    title: DataTypes.STRING
  }, {});
  // Comment.associate(Person)= function(models) {
  //   // associations can be defined here
  //   Comment.belongsTo(models.Person, {
  //     foreignKey: 'userId',
  //     onDelete: 'CASCADE'
  //   })
  // };
  return Comment;
};
