const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (id, email) => {
    return jwt.sign(
        {
            id: id,
            email: email
        },
        process.env.JWT_SECRET
    )
}