import React, { Component } from 'react'
import { Link } from 'react-router'
import AuthUtil from '../../utils/Auth'

class Navigation extends Component {
  logout = (event) => {
    event.preventDefault()
    AuthUtil.logOut()
  }

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            Olá
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link to="main">Home</Link>
              </li>
              <li>
                <Link to="login">Login</Link>
              </li>
              <li>
                <Link to="signup">Signup</Link>
              </li>
              <li>
                <Link to="profile">Profile</Link>
              </li>
              <li>
                <a onClick={ this.logout }>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation
