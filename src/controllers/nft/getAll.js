const {Nft} = require('../../models');

const getAll = async (req, res) => {
    const nfts = await Nft.find({}).populate(
        'author',
        {'name': 1, 'avatarUrl': 1}
    );

    res.status(200).json(nfts);
};

module.exports = getAll;