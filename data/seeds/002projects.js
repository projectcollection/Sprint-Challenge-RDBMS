
exports.seed = function(knex, Promise) {
      return knex('projects').insert([
        {name: 'Sprint'},
      ]);
};
