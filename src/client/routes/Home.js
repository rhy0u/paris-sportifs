import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import axios from 'axios'
import { Box } from '@smooth-ui/core-sc'
import NavBar from 'client/components/NavBar'
import Team from 'client/components/Team'

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
    else setTeams([])
  }, [value])

  return (
    <Box>
      <NavBar>
        <Box width={1} display="flex" justifyContent="center">
          <Select
            value={value}
            isClearable
            onChange={setValue}
            placeholder="Search by league"
            styles={{
              container: provided => ({
                ...provided,
                width: '300px',
              }),
            }}
            options={leagues?.map(league => ({
              label: league.name,
              value: league.id,
            }))}
            isLoading={!leagues}
          />
        </Box>
      </NavBar>

      <Box row pt={56}>
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
    </Box>
  )
}

export default Home
