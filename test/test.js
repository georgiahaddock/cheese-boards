const User = require('../models/user.model.js');
const Board = require('../models/board.model.js');
const Cheese = require('../models/cheese.model.js');
const index = require('../models/index.js');
const {synchronise, db} = require('../src/db');


beforeEach(async () => {
    await synchronise();
})

describe('testing User class', () => {
    test('user exists', async () => {
        const u = await User.create({name: 'Jane', email: 'jane@hotmail.com'});

        expect(u.name).toBe('Jane');
        expect(u.email).toBe('jane@hotmail.com');
        expect(u.id).toBeTruthy();
    })

    test('user can have many boards', async () => {
        const u = await User.create({name: 'Jane', email: 'jane@hotmail.com'});
        const spicy = await Board.create({type: 'spicy'});
        const vegan = await Board.create({type: 'vegan'});

        await u.addBoards([spicy, vegan]);

        expect(u.vegan).toBeTruthy();
        expect(u.spicy).toBeTruthy();
    })
})

describe('testing Board class', () => {
    test('board exists', async () => {
        const b = await Board.create({type: 'spicy', description: 'hot hot hot!!', rating: 3});

        expect(b.id).toBeTruthy();
        expect(b.type).toBe('spicy');
        expect(b.description).toBe('hot hot hot!!');
        expect(b.rating).toBe(3);
    })
})

describe('testing Cheese class', () => {
    test('cheese exists', async () => {
        // await db.sync({force:true});
        const c = await Cheese.create({title: 'cheddar', description: 'the best cheese in the world'});

        expect(c.id).toBeTruthy();
        expect(c.title).toBe('cheddar');
        expect(c.description).toBe('the best cheese in the world');
    })
})
