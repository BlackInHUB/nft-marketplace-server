const {User} = require('../../models');

const getTopRanked = async (req, res) => {
    const users = await User.aggregate([
        {'$project': {
            'name': 1,
            'avatarUrl': 1,
            'created': 1,
            'createdVolume': {'$size': '$created'}
        }},
        {'$sort': {'createdVolume': -1}},
        {'$limit': 12}
    ]);

    res.status(200).json(users);
};

module.exports = getTopRanked;