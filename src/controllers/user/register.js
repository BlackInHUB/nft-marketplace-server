const {User} = require('../../models');
const bcrypt = require('bcrypt');
const {httpError} = require('../../helpers');

const register = async (req, res) => {
    const {email, password} = req.body;

    const oldUser = await User.findOne({email});

    if (oldUser) {
        throw httpError(409, 'Email in use');
    };

    const hashedPassword = await bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    const newUser = await User.create({...req.body, password: hashedPassword});

    return res.status(200).json({
        _id: newUser._id
    });
};

module.exports = register;