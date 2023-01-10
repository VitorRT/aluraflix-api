const bcrypt = require('bcrypt');

exports.hasherPwd = async (pwd) => {
    const salt = await bcrypt.genSalt(12);
    const pwdHasheada = await bcrypt.hash(pwd, salt);
    return pwdHasheada;
}

exports.authenticateCredentials = (pwd, realPwd) => {
    return bcrypt.compare(pwd, realPwd);
}