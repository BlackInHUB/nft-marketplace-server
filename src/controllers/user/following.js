const {User} = require('../../models');

const following = async (req, res) => {
    const {_id: user} = req.user;
    const {_id: target} = req.params;

    if (await User.findOne({_id: user, 'iFollow': target})) {
        await User.findByIdAndUpdate({_id: target}, {$pull: {'followers': user}}, {new: true});
        await User.findByIdAndUpdate({_id: user}, {$pull: {'iFollow': target}}, {new: true});
        return res.status(200).json(target);
    };

    await User.findByIdAndUpdate({_id: target}, {$push: {'followers': user}}, {new: true});
    await User.findByIdAndUpdate({_id: user}, {$push: {'iFollow': target}}, {new: true});

    res.status(200).json(target)
};

module.exports = following; 