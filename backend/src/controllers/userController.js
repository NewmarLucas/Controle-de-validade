const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
    const user = await connection('user').select('*');

    return response.json(user);
},

async create(request, response) {

    const { username } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('user').insert({
        id,
        username,
    })

    return response.json({ id });

}
};