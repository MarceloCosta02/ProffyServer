import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id')
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE'); // Caso o id do usuario seja deletado, ele deleta em cascata tudo oq contem a FK dele na tabela de classes
    });
}

export async function down(knex: Knex) {
    knex.schema.dropTable('classes');
}