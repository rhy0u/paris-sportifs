exports.up = async knex =>
  knex.schema
    .createTable('leagues', table => {
      table.bigIncrements('id').primary()
      table.string('name').notNull()
      table.string('sport').notNull()
      table.timestamps(false, true)
    })
    .createTable('teams', table => {
      table.bigIncrements('id').primary()
      table.string('name').notNull()
      table.string('thumbnail').notNull()
      table
        .bigInteger('league_id')
        .unsigned()
        .index()
        .references('id')
        .inTable('leagues')
        .onDelete('CASCADE')
      table.timestamps(false, true)
    })
    .createTable('players', table => {
      table.bigIncrements('id').primary()
      table.string('name').notNull()
      table.string('position').notNull()
      table.jsonb('signin').notNull()
      table.jsonb('born').notNull()
      table.string('thumbnail').notNull()
      table
        .bigInteger('team_id')
        .unsigned()
        .index()
        .references('id')
        .inTable('teams')
        .onDelete('CASCADE')
      table.timestamps(false, true)
    })

exports.down = async knex =>
  knex.schema
    .dropTableIfExists('players')
    .dropTableIfExists('teams')
    .dropTableIfExists('leagues')
