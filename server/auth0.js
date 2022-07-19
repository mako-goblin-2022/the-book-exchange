const jwt = require('express-jwt')
const jwks = require('jwks-rsa')

//set the domain and audience (API Identifier)
const domain = 'https://mako-thebookexchange.au.auth0.com'
const audience = 'https://thebookexchange/api'

const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${domain}/.well-known/jwks.json`,
  }),
  audience: audience,
  issuer: `${domain}/`,
  algorithms: ['RS256'],
})

module.exports = checkJwt
