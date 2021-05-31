const { Model, DataTypes } = require('sequelize');

class Friend extends Model {}

Friend.init(
    {
      id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name:{
        type:DataTypes.STRING,
      }     
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'summoner',
    }
  );
  
  module.exports = Friend;
  