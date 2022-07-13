/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('books', (t) => {
    t.increments('id')
    t.text('title')
    t.text('author')
    t.text('genre')
    t.text('publishing_details')
    t.text('edition')
    t.string('isbn')
    t.text('summary')
    t.text('condition')
    t.text('image')
    t.integer('user_id')
    t.boolean('status')
    t.string('rating')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('books')
}
