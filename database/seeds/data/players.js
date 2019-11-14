import Player from 'server/models/Player'

export const generate = async ({ teams }) => {
  const [kishimoto, kubo, horikoshi] = await Player.query().insertGraphAndFetch(
    [
      {
        name: 'Pierre-Emerick Aubameyang',
        position: 'Forward',
        thumbnail:
          'https://www.thesportsdb.com/images/media/player/thumb/fnk3u51520755737.jpg',
        signin: { amount: 63750000, currency: 'eur' },
        born: { date: new Date(614223439198) },
        team: teams.englishPremierLeague,
      },
      {
        name: 'Mesut Ozil',
        position: 'Midfielder',
        thumbnail:
          'https://www.thesportsdb.com/images/media/player/thumb/g0xlkp1510859385.jpg',
        signin: { amount: 42500000, currency: 'gpp' },
        born: { date: new Date(592983259198) },
        team: teams.englishPremierLeague,
      },
      {
        name: 'Olivier Giroud',
        position: 'Forward',
        thumbnail:
          'https://www.thesportsdb.com/images/media/player/cutout/pe0azg1557049473.png',
        signin: { amount: 18000000, currency: 'gpp' },
        born: { date: new Date(528526159198) },
        team: teams.englishPremierLeague,
      },
    ],
    { relate: true },
  )

  return { kishimoto, kubo, horikoshi }
}
