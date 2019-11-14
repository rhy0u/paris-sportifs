import BaseModel, { mergeSchemas } from 'server/models/BaseModel'

class Team extends BaseModel {
  static tableName = 'teams'

  static jsonSchema = mergeSchemas(BaseModel.jsonSchema, {
    required: ['name', 'thumbnail'],

    properties: {
      name: { type: 'string' },
      thumbnail: { type: 'string' },
    },
  })

  static relationMappings = {
    league: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: 'League',
      join: {
        from: 'teams.leagueId',
        to: 'leagues.id',
      },
    },

    players: {
      relation: BaseModel.HasManyRelation,
      modelClass: 'Player',
      join: {
        from: 'teams.id',
        to: 'players.teamId',
      },
    },
  }
}

export default Team
