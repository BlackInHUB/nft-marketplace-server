const {NftSet} = require('../../models');

const getTrending = async (req, res) => {
    const trending = await NftSet.aggregate([{$sample: {size: 3}}]);
    await NftSet.populate(trending, {path: 'author', select: {'name': 1, 'avatarUrl': 1}});
    await NftSet.populate(trending, {path: 'nfts', select: {'imageUrl': 1}});

    res.status(200).json(trending);
};

module.exports = getTrending;