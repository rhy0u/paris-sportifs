import League from 'server/models/League'

export const generate = async () => {
  const [
    englishPremierLeague,
    frenchLeague,
    superCopaDeEspana,
  ] = await League.query().insertGraphAndFetch(
    [
      { sport: 'soccer', name: 'English Premier League' },
      { sport: 'soccer', name: 'French Ligue 1' },
      { sport: 'soccer', name: 'Supercopa de Espana' },
    ],
    { relate: true },
  )

  return { englishPremierLeague, frenchLeague, superCopaDeEspana }
}
