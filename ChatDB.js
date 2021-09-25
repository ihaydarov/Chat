 const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('postgres::memory');
const { ChatDB } = require('ChatDB');
class User extends Model {}

sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

  module.exports = { ChatDB }
