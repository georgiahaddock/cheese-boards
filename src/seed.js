const {User, Cheese, Board} = require('../models');
const {db} = require('../src/db.js');

async function seed() {
    //drop the table if it already exists, create it if it doesn't.
    await User.sync({
        force: true
    })
    await Cheese.sync({
        force: true
    })
    await Board.sync({
        force: true
    })
    await db.sync({
        force: true
    })

    await User.bulkCreate([
        {
        name: "Draco Collander",
        email: "d.collander@kitchenwands.eu"
        },
        {
        name: "Karlamander Hoppington",
        email: "leavemealone@gmail.com"
        },
        {
        name: "Krimpbleton McFaffer",
        email: "k.m@meta.co.lol"
        },
        {
        name: "Arlamander Poom",
        email: "poomy@pombles.uk"
        }

    ]), {validate: true}

    await Cheese.bulkCreate([
        {
        title: "Brielicious",
        description: "This cheese tastes nice"
        },
        {
        title: "I cheddar to think",
        description: "This cheese is very scary"
        },
        {
        title: "Camembertotally Awesome",
        description: "This cheese is secretly not a cheese"
        },
        {
        title: "Roquefort the Casbah",
        description: "This cheese is a party cheese"
        }

    ]), {validate: true}

    await Board.bulkCreate([
        {
        type: "Saucy Board",
        description: "Lots of dips that dribble off the edges",
        rating: 5
        },
        {
        type: "Cheeky Board",
        description: "Cheeky cheeky cheekyyyyy",
        rating: 3
        },
        {
        type: "Corker of a Board",
        description: "The board is made of cork. That's it.",
        rating: 1
        },

    ]), {validate: true}

}

seed();
