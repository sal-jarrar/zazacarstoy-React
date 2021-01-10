import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import defaultContainer from './defaultContainer'
import WelcomScreen from './screens/WelcomScreen'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={WelcomScreen} />
        <Route component={defaultContainer} />
      </Switch>
    </Router>
  )
}

export default App
