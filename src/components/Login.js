import React, { Component, PropTypes } from 'react'
import AuthUtil from '../utils/Auth'

class Login extends Component {
  static contextTypes = {
    router: PropTypes.func.isRequired
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const email = this.refs.email.getDOMNode().value
    const password = this.refs.password.getDOMNode().value

    AuthUtil.logIn(email, password).then(() => {
      console.log('Logged In...')
    }, error => {
      console.log('Logged In Failed...', error)
    })
  }

  render() {
    return (
      <form className="from-signin" role="form" onSubmit={ this.handleSubmit }>
        <h2 className="form-signin-heading">Log In</h2>
        <label htmlFor="email" className="sr-only">Email address</label>
        <input type="email" id="email" className="form-control" placeholder="Email address" ref="email" required autofocus />
        <label htmlFor="password" className="sr-only">Password</label>
        <input type="password" id="password" className="form-control" placeholder="Password" ref="password" required autofocus />
        <button type="submit" className="btn btn-default btn-primary">Sign In</button>
      </form>
    )
  }
}

export default Login
