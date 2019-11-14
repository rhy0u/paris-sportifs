import BaseModel, { mergeSchemas } from 'server/models/BaseModel'

class Player extends BaseModel {
  static tableName = 'players'

  static jsonSchema = mergeSchemas(BaseModel.jsonSchema, {
    required: ['name'],
    properties: {
      name: { type: 'string' },
      thumbnail: { type: 'string' },
      position: { type: 'string' },
      signin: { type: 'object' },
      born: { type: 'object' },
    },
  })

  static relationMappings = {
    team: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: 'Team',
      join: {
        from: 'players.teamId',
        to: 'teams.id',
      },
    },
  }
}

export default Player
