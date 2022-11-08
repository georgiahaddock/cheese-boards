const { DataTypes, Model } = require('sequelize');
const {db} = require('../src/db')

class Board extends Model{};

Board.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING
    },
    rating: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0,
            max: 5
        }

    }
},
{
    sequelize: db,
    modelName: 'Board'
});

 module.exports = Board;
