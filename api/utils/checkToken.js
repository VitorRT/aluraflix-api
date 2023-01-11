const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) {
        return res.status(401).json({
            "msg": "Acesso negado."
        })
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        res.status(400).json({
            error: "Token inválido!"
        })
    }
}