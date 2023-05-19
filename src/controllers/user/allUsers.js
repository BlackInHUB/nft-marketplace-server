const {User} = require('../../models');

const allUsers = async (req, res) => {
    const users = await User.aggregate([
        {'$project': {
            'name': 1,
            'avatarUrl': 1,
            'created': 1,
            'createdVolume': {'$size': '$created'}
        }},
        {'$sort': {'createdVolume': -1}}
    ]);

    const result = users.length > 12 ? users.slice(0, 12) : users;

    res.status(200).json(result);
};

module.exports = allUsers;