import React from 'react'
import Router from 'react-router'
import routes from './config/routes'

Router.run(routes, Router.HistoryLocation, (Root, state) => {
  React.render(<Root {...state} />, document.getElementById('main'))
})
