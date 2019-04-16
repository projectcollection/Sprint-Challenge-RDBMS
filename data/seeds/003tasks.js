
exports.seed = function(knex, Promise) {
      return knex('tasks').insert([
        { description: 'fix bugs', project_id: 1},
      ]);
};
