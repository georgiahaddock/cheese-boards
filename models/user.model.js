const { DataTypes, Model } = require('sequelize');
const {db} = require('../src/db')

class User extends Model{};

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING
    }
},
{
    sequelize: db,
    modelName: 'User'
});

 module.exports = User;
