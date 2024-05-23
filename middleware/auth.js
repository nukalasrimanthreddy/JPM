const jwt = require('jsonwebtoken');

async function protect(req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, "cvrcoe");
        req.user = decoded.id;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized' });
    }
}

module.exports = protect;