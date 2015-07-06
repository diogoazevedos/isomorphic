import React, { Component } from 'react'
import { RouteHandler } from 'react-router'
import { Parse } from 'parse'
import { Application, JavaScript } from '../config/parse'

Parse.initialize(Application, JavaScript)

class Main extends Component {
  render() {
    return (
      <RouteHandler {...this.props} />
    )
  }
}

export default Main
