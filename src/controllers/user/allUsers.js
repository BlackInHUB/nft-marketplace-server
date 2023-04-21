const {User} = require('../../models');

const allUsers = async (req, res) => {
    const users = await User.find({}, {'name': 1, 'avatarUrl': 1});

    res.status(200).json(users);
};

module.exports = allUsers;