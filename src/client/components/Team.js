import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as routePaths from 'client/utils/routePaths'

const TeamThumbnail = styled.img`
  width: 150px;
`

const Team = ({ team }) => {
  return (
    <Link to={routePaths.team(team.id)}>
      <TeamThumbnail src={team.thumbnail} alt={team.name} />
    </Link>
  )
}

export default Team
