const {DataTypes, Model } = require('sequelize');
const {db} = require('../src/db')

class Cheese extends Model{};

Cheese.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.STRING
    }
},
{
    sequelize: db,
    modelName: 'Cheese'
});

 module.exports = Cheese;
