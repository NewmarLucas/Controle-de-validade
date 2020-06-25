const { create, index } = require("./userController");

const connection = require('../database/connection');

module.exports = {
    async index (request, response){
        const { page = 1 } = request.query;

        const [count] = await connection('products').count();

        const products = await connection('products')
        .join('user', 'user.id', '=', 'products.user_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select(['products.*', 'user.name']);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(products);
    },

    async create(request, response) {
        const { name, barcode, validity } = request.body;
        const user_id = request.headers.authorization;

        const [id] = await connection('products').insert({
            name,
            barcode,
            validity,
            user_id,
        });

        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;
        const user_id = request.headers.authorization;

        const products = await connection('products')
        .where('id', id)
        .select('user_id')
        .first();

        if (products.user_id != user_id) {
            return response.status(401).json({ error: 'Operation not permitted.' });
        }

        await connection('products').where('id', id).delete();

        return response.status(204).send();
    }
};