
exports.up = function(knex, Promise) {
  return knex.schema
      .createTable('projects', (col) => {
          col.increments()

          col.string('name').notNullable()

          col.string('description')

          col.boolean('complete').defaultTo(false)

      }).createTable('actions', (col) => {
          col.increments()

          col.string('task').notNullable()

          col.string('notes')

          col.boolean('complete').defaultTo(false)

          col.integer('project_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('projects')
              .onDelete('CASCADE')
              .onUpdate('CASCADE')
      })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('tasks')
};
