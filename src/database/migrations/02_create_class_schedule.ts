import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();
        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('class_id')
        .references('id')
        .inTable('classes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE'); // Caso o id do usuario seja deletado, ele deleta em cascata tudo oq contem a FK dele na tabela de classes
    });
}

export async function down(knex: Knex) {
    knex.schema.dropTable('class_schedule');
}