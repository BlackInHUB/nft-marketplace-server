const {Nft} = require('../../models');

const getTrending = async (req, res) => {
    const trending = await Nft.aggregate([{$sample: {size: 3}},
        {'$project': {
            'title': 1,
            'imageUrl': 1,
            'author': 1
        }}
    ]);
    await Nft.populate(trending, {path: 'author', select: {'name': 1, 'avatarUrl': 1}});

    res.status(200).json(trending);
};

module.exports = getTrending;