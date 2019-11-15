import express from 'express'
import asyncHandler from 'server/middlewares/asyncHandler'
import League from 'server/models/League'

const router = express.Router()

router.get(
  '/leagues',
  asyncHandler(async (req, res) => {
    const leagues = await League.query()
    res.send(leagues)
  }),
)

export default router
