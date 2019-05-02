
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'corn flour', quantity: '1 cup' },
        { name: 'butter', quantity: '1 gram' }
      ])
    })
}
