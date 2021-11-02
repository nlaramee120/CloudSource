const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Location model
class Developer extends Model {}

// create fields/columns for Location model
Developer.init(
  {
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    skills: {
        type: DataTypes.STRING
    },
    wage_low: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    wage_high: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'location'
  }
);

module.exports = Developer;