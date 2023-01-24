const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const interventionId = decodedToken.interventionId;
        req.auth = {
            interventionId: interventionId
        };
        next();
    } catch (error) {
        res.status(401).json({ error });
    }
};