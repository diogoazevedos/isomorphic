import React, { Component } from 'react'
import { Parse } from 'parse'

function withAuthentication(ComposedComponent) {
  return class WithAuthentication extends Component {
    static willTransitionTo(transition) {
      if (! Parse.User.current())
        transition.redirect('login', {}, { 'nextPath': transition.path });
    }

    render() {
      <ComposedComponent {...this.props} />
    }
  }
}

export default withAuthentication
