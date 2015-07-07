import React from 'react'
import withAuthentication from '../decorators/withAuthentication'
import Router from 'react-router'

const Profile = React.createClass({
  mixins: [withAuthentication],
  render: function() {
    return (
      <div>Protegido</div>
    )
  }
})

export default Profile
