
exports.up = function(knex) {
    return knex.schema.createTable('user', function(table){
     table.string('id').primary();
     table.string('username').notNullable();
    });

};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
