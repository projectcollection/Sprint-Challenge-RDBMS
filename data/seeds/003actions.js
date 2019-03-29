
exports.seed = function(knex, Promise) {
      return knex('actions').insert([
        { task: 'fix bugs', project_id: 1},
      ]);
};
