import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import axios from 'axios'
import Team from 'client/components/Team'
import { Box } from '@smooth-ui/core-sc'

const getLeagues = async () => {
  const { data } = await axios.get('/leagues')
  return data
}
const getTeams = async leagueId => {
  const { data } = await axios.get('/teams', {
    params: { leagueId },
  })
  return data
}

const Home = () => {
  const [value, setValue] = useState()
  const [leagues, setLeagues] = useState()
  const [teams, setTeams] = useState()

  useEffect(() => {
    getLeagues().then(setLeagues)
  }, [])

  useEffect(() => {
    if (value) getTeams(value.value).then(setTeams)
  }, [value])

  return (
    <div>
      <Box p={2}>
        <Select
          value={value}
          isClearable
          onChange={setValue}
          placeholder="Search by league"
          options={leagues?.map(league => ({
            label: league.name,
            value: league.id,
          }))}
          isLoading={!leagues}
        />
      </Box>

      <Box row>
        {teams?.map(team => (
          <Box
            col={{ xs: 1 / 2, md: 1 / 4 }}
            key={team.id}
            display="flex"
            justifyContent="center"
          >
            <Team team={team} />
          </Box>
        ))}
      </Box>
    </div>
  )
}

export default Home
