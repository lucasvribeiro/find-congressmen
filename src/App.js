import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home/index.js'
import Profile from './pages/profile/index.js'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = "/" exact component = { Home } />
        <Route path = "/deputado/:id" component = { Profile } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
