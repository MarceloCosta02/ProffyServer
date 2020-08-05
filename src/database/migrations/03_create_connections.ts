import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('user')
        .onUpdate('CASCADE')
        .onDelete('CASCADE'); // Caso o id do usuario seja deletado, ele deleta em cascata tudo oq contem a FK dele na tabela de classes
    
        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();
    });
}

export async function down(knex: Knex) {
    knex.schema.dropTable('connections');
}