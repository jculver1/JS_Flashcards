exports.up = function(knex, Promise) {
    return knex.schema.createTable('data_types', table => {
        table.increments('id').unsigned().primary();
        table.string('name').notNullable().defaultsTo('');
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('data_types')
}

