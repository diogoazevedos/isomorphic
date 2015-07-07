import React from 'react'
import Router from 'react-router'
import Routes from './config/Routes'

Router.run(Routes, Router.HistoryLocation, (Root, state) => {
  React.render(<Root {...state} />, document.getElementById('main'))
})
