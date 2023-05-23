const {NftSet} = require('../../models');

const update = async (req, res) => {
    const {_id} = req.params;

    const collection = await NftSet.findByIdAndUpdate(_id, req.body, {new: true});
    const details = await NftSet.findById(_id).populate(
        'nfts',
        {'imageUrl': 1, 'title': 1, 'author': 1, 'price': 1}
    );
    await NftSet.populate(collection, {path: 'author', select: {'avatarUrl': 1, 'name': 1}})
    await NftSet.populate(details, {path: 'author', select: {'avatarUrl': 1, 'name': 1}})

    res.status(200).json({collection, details});
};

module.exports = update;    