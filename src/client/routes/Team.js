import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as routePaths from 'client/utils/routePaths'
import axios from 'axios'
import styled from 'styled-components'
import { Box } from '@smooth-ui/core-sc'
import NavBar from 'client/components/NavBar'
import Player from 'client/components/Player'

const Title = styled.h1`
  font-size: 26px;
  margin: 0;
  color: #000;
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
      <NavBar>
        <Box row>
          <Box col={{ xs: 1 / 3 }} display="flex" alignItems="center">
            <Link
              to={routePaths.home()}
              style={{
                textDecoration: 'none',
                color: '#0070c9',
                marginLeft: '16px',
              }}
            >
              {'< Back'}
            </Link>
          </Box>
          <Box
            col={{ xs: 1 / 3 }}
            display="flex"
            justifyContent="center"
            textAlign="center"
          >
            <Title>{team.name}</Title>
          </Box>
        </Box>
      </NavBar>
      <Box row pt={56}>
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
