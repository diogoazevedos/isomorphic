import React, { Component } from 'react'
import { RouteHandler } from 'react-router'
import { Parse } from 'parse'
import { Application, JavaScript } from '../config/parse'
import Navigation from './Common/Navigation'

Parse.initialize(Application, JavaScript)

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <Navigation {...this.props} />
        <div className="container">
          <RouteHandler {...this.props} />
        </div>
      </div>
    )
  }
}

export default Main
