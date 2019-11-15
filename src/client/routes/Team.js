import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as routePaths from 'client/utils/routePaths'
import axios from 'axios'
import styled from 'styled-components'
import { Box } from '@smooth-ui/core-sc'
import Player from 'client/components/Player'

const Title = styled.h1`
  font-size: 26px;
  margin: 0;
`

const getTeam = async teamId => {
  const { data } = await axios.get('/team', { params: { teamId } })
  return data
}

const Team = ({
  match: {
    params: { teamId },
  },
}) => {
  const [team, setTeam] = useState()

  useEffect(() => {
    getTeam(teamId).then(result => setTeam(result))
  }, [])

  return team ? (
    <div>
      <Box row display="flex" alignItems="center">
        <Box col={{ xs: 1 / 3 }}>
          <Link
            to={routePaths.home()}
            style={{ textDecoration: 'none', color: '#0070c9' }}
          >
            {'< Back'}
          </Link>
        </Box>
        <Title>{team.name}</Title>
      </Box>
      <Box row>
        {team.players.map(player => (
          <Box col={{ xs: 1 }} key={player.id}>
            <Player player={player} />
          </Box>
        ))}
      </Box>
    </div>
  ) : (
    <div>loading...</div>
  )
}

export default Team
