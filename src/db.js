const {Sequelize} = require('sequelize');
const path = require('path');

const db = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'cheeses.sqlite'),
    logging: false
})

async function synchronise(){
    await db.sync({force:true});
}

module.exports = {synchronise, db}
