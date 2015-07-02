import React, { Component } from 'react'
import { RouteHandler } from 'react-router'

class Main extends Component {
  render() {
    return (
      <RouteHandler {...this.props} />
    )
  }
}

export default Main
