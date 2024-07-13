'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reminderticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reminderticket.init({
    subject:{
      type:DataTypes.STRING,
      allowNull:false
    },
    mailText: {
      type:DataTypes.STRING,
      allowNull:false
    },
    mailTo: {
      type:DataTypes.STRING,
      allowNull:false
    },
    status: {
      type:DataTypes.ENUM,
      allowNull:false,
      values:['PENDING','SUCCESS','FAILED'],
      defaultValue:'PENDING'
    },
    reminderTime: {
      type:DataTypes.DATE,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Reminderticket',
  });
  return Reminderticket;
};