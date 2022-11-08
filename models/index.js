const User = require('../models/user.model.js');
const Board = require('../models/board.model.js');
const Cheese = require('../models/cheese.model.js');

function createAssociations(){
    User.hasMany(Board);
    Board.hasOne(User);
    Board.belongsToMany(Cheese, {through: 'Cheese_Board'});
    Cheese.belongsToMany(Board, {through: 'Cheese_Board'});



}

module.exports = {User, Board, Cheese};
