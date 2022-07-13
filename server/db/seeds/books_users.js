exports.seed = function (knex) {
  return knex('books_users')
    .del()
    .then(() => {
      return knex('books_users').insert([
        { books_id: 1, user_id: 2 },
        { books_id: 2, user_id: 2 },
        { books_id: 3, user_id: 1 },
        { books_id: 4, user_id: 6 },
        { books_id: 5, user_id: 3 },
        { books_id: 6, user_id: 4 },
      ])
    })
}
