import { Parse } from 'parse'

const withAuthentication = {
  statics: {
    willTransitionTo: function(transition) {
      if (! Parse.User.current())
        transition.redirect('login', {}, { 'nextPath': transition.path });
    }
  }
}

export default withAuthentication
