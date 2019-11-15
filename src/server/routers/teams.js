import express from 'express'
import asyncHandler from 'server/middlewares/asyncHandler'
import Team from 'server/models/Team'

const router = express.Router()

router.get(
  '/teams',
  asyncHandler(async (req, res) => {
    const { leagueId } = req.query
    const teams = await Team.query().where({ leagueId })
    res.send(teams)
  }),
)

router.get(
  '/team',
  asyncHandler(async (req, res) => {
    const { teamId } = req.query
    const team = await Team.query()
      .findOne({ id: teamId })
      .eager('players')
    res.send({
      name: team.name,
      players: team.players.map(player => ({
        id: player.id,
        name: player.name,
        thumbnail: player.thumbnail,
        position: player.position,
        birthDate: player.born.date,
        price: `${player.signin.amount} ${player.signin.currency}`,
      })),
    })
  }),
)

export default router
