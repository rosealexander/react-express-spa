require("dotenv").config();

const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: process.env.AUTH_API_JWKSURI
    }),
    // audience: process.env.AUTH_API_AUDENCE,
    aud: process.env.AUTH_API_AUDENCE,
    issuer: [process.env.AUTH_API_ISSUER],
    algorithms: [process.env.AUTH_API_ALGORITHMS]
});

module.exports = checkJwt;
