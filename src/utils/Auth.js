import { Parse } from 'parse'

class Auth {
  signUp(email, password) {
    const User = new Parse.User({
      email: email,
      username: email,
      password: password
    })

    return User.signUp()
  }

  logIn(email, password) {
    return Parse.User.logIn(email, password)
  }

  logOut() {
    return Parse.User.logOut()
  }
}

export default new Auth()
