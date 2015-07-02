import React from 'react'
import { Router, Route, DefaultRoute } from 'react-router'

import Main from '../components/Main'
import Home from '../components/Home'


export default (
  <Route name="main" path="/" handler={ Main }>
    <DefaultRoute handler={ Home } />
  </Route>
)
