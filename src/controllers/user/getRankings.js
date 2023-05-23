const {User} = require('../../models');

const getRankings = async (req, res) => {
    const users = await User.aggregate([
        {'$project': {
            'name': 1,
            'avatarUrl': 1,
            'created': 1,
            'createdVolume': {'$size': '$created'}
        }},
        {'$sort': {'createdVolume': -1}},
    ]);

    await User.populate(users, {path: 'created', select: {'price': 1}});

    res.status(200).json(users);
};

module.exports = getRankings;