import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const PlayerWrapper = styled.div`
  background-color: #eff0f1;
  display: flex;
  height: 100px;
  padding: 16px 8px;
  margin-bottom: 8px;
`
const PlayerThumbnail = styled.img`
  width: 150px;
  object-fit: cover;
  margin-right: 16px;
`

const PlayerInfosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const PlayerName = styled.div`
  display: flex;
`

const PlayerSecondaryInfos = styled.div`
  color: #aaa;
`

const Player = ({ player }) => {
  return (
    <PlayerWrapper>
      <PlayerThumbnail src={player.thumbnail} />
      <PlayerInfosWrapper>
        <PlayerName>{player.name}</PlayerName>
        <PlayerSecondaryInfos>{player.position}</PlayerSecondaryInfos>
        <PlayerSecondaryInfos>
          birthDate: {moment(player.birthDate).format('YYYY-MM-DD')}
        </PlayerSecondaryInfos>
        <PlayerSecondaryInfos>price: {player.price}</PlayerSecondaryInfos>
      </PlayerInfosWrapper>
    </PlayerWrapper>
  )
}

export default Player
