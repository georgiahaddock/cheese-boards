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

    const u1 = User.build({
        name: "Draco Collander",
        email: "d.collander@kitchenwands.eu"
    })
    await u1.save();
}
