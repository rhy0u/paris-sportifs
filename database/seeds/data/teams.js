import Team from 'server/models/Team'

export const generate = async ({ leagues }) => {
  const [
    arsenal,
    manchesterCity,
    chelsea,
  ] = await Team.query().insertGraphAndFetch(
    [
      {
        name: 'Arsenal',
        thumbnail:
          'https://www.thesportsdb.com//images//media//team//badge//a1af2i1557005128.png',
        league: leagues.englishPremierLeague,
      },
      {
        name: 'Manchester City',
        thumbnail:
          'https://www.thesportsdb.com/images/media/team/badge/vwpvry1467462651.png',
        league: leagues.englishPremierLeague,
      },
      {
        name: 'Chelsea',
        thumbnail:
          'https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png',
        league: leagues.englishPremierLeague,
      },
    ],
    { relate: true },
  )

  return { arsenal, manchesterCity, chelsea }
}
