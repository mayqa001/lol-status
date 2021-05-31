const { Model, DataTypes } = require('sequelize');

class Summoner extends Model {}

Summoner.init(
    {
      id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name:{
        type:DataTypes.STRING,
      },
      password:{
        type:DataTypes.STRING,
      },
      friend_id:{
        type:DataTypes.INTEGER,
        reference:{
          model:'friend',
          key:'id'
        }
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
  
  module.exports = Summoner;
  