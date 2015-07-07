import React from 'react'
import { Router, Route, DefaultRoute } from 'react-router'

// Components
import Main from '../components/Main'
import { Home } from '../components/Page'
import { Login, SignUp, Profile } from '../components/Auth'

export default (
  <Route name="main" path="/" handler={ Main }>
    <Route name="login" handler={ Login } />
    <Route name="signup" handler={ SignUp } />
    <Route name="profile" handler={ Profile } />
    <DefaultRoute handler={ Home } />
  </Route>
)
