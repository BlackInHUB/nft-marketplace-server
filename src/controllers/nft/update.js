const {Nft} = require('../../models');

const update = async (req, res) => {
    const {_id} = req.body;

    const result = await Nft.findByIdAndUpdate(_id, req.body, {new: true});
    await Nft.populate(result, {path: 'author', select: {'avatarUrl': 1, 'name': 1}});

    res.status(200).json(result);
};

module.exports = update;