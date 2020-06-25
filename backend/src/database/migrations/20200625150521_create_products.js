exports.up = function(knex) {
  return knex.schema.createTable('products', function(table){
   table.increments();
   table.string('name').notNullable();
   table.string('barcode').notNullable();
   table.string('validity').notNullable();

   table.string('user_id').notNullable();

   table.foreign('user_id').references('id').inTable('user');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('products');
};
