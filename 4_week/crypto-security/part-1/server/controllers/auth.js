const users = []
var bcrypt = require('bcryptjs');



module.exports = {
  login: (req, res) => {
    console.log('Logging In User')
    const { username, password } = req.body
    let userData
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        userData = users[i]
      }
    }

    if (!userData) {
      res.status(200).send({ success: false, message: 'bad username' })
    } else {
      bcrypt.compare(password, userData.passwordHash, (err, result) => {
        if (!err) {
          if (result) {
            let userToReturn = { ...userData }
            delete userToReturn.passwordHash
            res.status(200).send(userToReturn)
          } else {
            res.status(200).send({ success: false, message: "bad password" })
          }
        } else {
          console.log(`error during bcrypt.compare(): ` + err)
          res.status(400).send("User not found.")
        }
      })
    }
  },

  register: (req, res) => {
    const { username, email, firstName, lastName, password } = req.body
    const saltRounds = 10

    bcrypt.hash(password, saltRounds, (err, passwordHash) => {
      let newDatabaseEntry = {}
      newDatabaseEntry.username = username
      newDatabaseEntry.email = email
      newDatabaseEntry.firstName = firstName
      newDatabaseEntry.lastName = lastName
      newDatabaseEntry.passwordHash = passwordHash
      console.log('Registering User')
      console.log(newDatabaseEntry)
      users.push(newDatabaseEntry)
      res.status(200).send(req.body)

    })


  }
}