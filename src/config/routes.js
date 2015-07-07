import React from 'react'
import { Router, Route, DefaultRoute } from 'react-router'

import Main from '../components/Main'
import Home from '../components/Home'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Profile from '../components/Profile'

export default (
  <Route name="main" path="/" handler={ Main }>
    <Route name="login" handler={ Login } />
    <Route name="signup" handler={ SignUp } />
    <Route name="profile" handler={ Profile } />
    <DefaultRoute handler={ Home } />
  </Route>
)
