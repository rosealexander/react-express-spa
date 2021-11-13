const checkAuthorization = (req, res, next) => {
    const isAdministrator =!!req.user['http://react-express-spa.com/roles'].find(role => role === 'Administrator')
    return isAdministrator ? next() : res.sendStatus(401);
};

module.exports = checkAuthorization;
