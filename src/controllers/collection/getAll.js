const {NftSet} = require('../../models');

const getAll = async (req, res) => {
    const collections = await NftSet.find({}).populate(
        'nfts',
        {'imageUrl': 1}
    ).populate(
        'author',
        {'name': 1, 'avatarUrl': 1}
    );

    res.status(200).json(collections);
};

module.exports = getAll;