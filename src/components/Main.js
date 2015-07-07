import React, { Component } from 'react'
import { RouteHandler } from 'react-router'
import { Parse } from 'parse'
import { Navigation } from './Common'
import Services from '../config/Services'

// Boot Parse
Parse.initialize(Services.Parse.APPID, Services.Parse.JSKEY)

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
