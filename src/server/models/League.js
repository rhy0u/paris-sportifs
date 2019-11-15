import BaseModel, { mergeSchemas } from 'server/models/BaseModel'

class League extends BaseModel {
  static tableName = 'leagues'

  static jsonSchema = mergeSchemas(BaseModel.jsonSchema, {
    required: ['name', 'sport'],
    properties: {
      name: { type: 'string' },
      sport: { type: 'string' },
    },
  })

  static relationMappings = {
    teams: {
      relation: BaseModel.HasManyRelation,
      modelClass: 'Team',
      join: {
        from: 'leagues.id',
        to: 'teams.leagueId',
      },
    },
  }
}

export default League
