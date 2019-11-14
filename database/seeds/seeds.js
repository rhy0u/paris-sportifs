import { connect as connectDatabase } from 'server/services/database'
import { truncateAll } from 'server/utils/database'
import * as leaguesSeeds from './data/leagues'
import * as teamsSeeds from './data/teams'
import * as playersSeeds from './data/players'

export async function seed(knex) {
  if (
    process.env.NODE_ENV === 'production' &&
    process.env.FORCE_SEED !== 'true'
  ) {
    throw new Error('Impossible to run seeds in production')
  }

  const originalDestroy = knex.destroy
  knex.destroy = () => {}
  await truncateAll(knex)
  knex.destroy = originalDestroy
  connectDatabase()

  const leagues = await leaguesSeeds.generate()
  const teams = await teamsSeeds.generate({ leagues })
  await playersSeeds.generate({ teams })
}
