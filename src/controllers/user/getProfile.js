const {User} = require('../../models');

const getProfile = async (req, res) => {
    const {_id} = req.params;

    const user = await User.findById(_id, {'password': 0, 'token': 0, 'iFollow': 0, 'email': 0});

    res.status(200).json(user);
};

module.exports = getProfile;