const httpStatus = require('http-status')
const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader?.split(' ')[1]

  console.log(token)
  if (token === null) return res.status(httpStatus.UNAUTHORIZED).send({ error: 'You are not authorized.' })

  jwt.verify(token, process.env.ACCCESS_TOKEN_SECRET_KEY, (err, user) => {
    if (err) return res.status(httpStatus.FORBIDDEN).send({ error: err })
    // If the token is valid, the user is authorized to access the route.
    req.user = user
    next()
  })
}

module.exports = authenticateToken
