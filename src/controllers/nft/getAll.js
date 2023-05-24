const {Nft} = require('../../models');

const getAll = async (req, res) => {
    const {search} = req.query;

    if (search) {
        const nfts = await Nft.find({title: {$regex: search, '$options': 'i'}})
        .populate(
            'author',
            {'name': 1, 'avatarUrl': 1}
        )
        .sort({createdAt: -1})

        return res.status(200).json(nfts);  
    };

    const nfts = await Nft.find({}).populate(
        'author',
        {'name': 1, 'avatarUrl': 1}
    );

    res.status(200).json(nfts);
};

module.exports = getAll;