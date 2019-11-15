import React from 'react'
import { Switch, Route } from 'react-router-dom'
import * as routePaths from 'client/utils/routePaths'
import * as Routes from 'client/routes'

const App = () => {
  return (
    <Switch>
      <Route exact path={routePaths.home()} component={Routes.Home} />
      <Route exact path={routePaths.team(':teamId')} component={Routes.Team} />
    </Switch>
  )
}

export default App
