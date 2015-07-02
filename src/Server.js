import path from 'path'
import express from 'express'
import React from 'react'
import Router from 'react-router'
import routes from './config/routes'

const server = express()

server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'jade')

server.use(express.static(path.join(__dirname, 'public')))

server.get('*', (request, response) => {
  Router.run(routes, request.path, (Root, state) => {
    let content = React.renderToString(<Root {...state} />)
    response.render('react', {
      content: content
    })
  })
})

server.listen(3000, () => {
  if (process.send) {
    process.send('online')
  } else {
    console.log('The server is running...')
  }
})
