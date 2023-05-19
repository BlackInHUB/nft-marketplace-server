const {Nft, NftSet} = require('../../models');

const getProfileNft = async (req, res) => {
    const {_id} = req.params;

    const created = await Nft.find({author: _id}, {'title': 1, 'imageUrl': 1, 'author': 1, 'price': 1}).populate(
        'author',
        {'name': 1, 'avatarUrl': 1}
    );
    const owned = await Nft.find({owner: _id}, {'title': 1, 'imageUrl': 1, 'author': 1, 'price': 1}).populate(
        'author',
        {'name': 1, 'avatarUrl': 1}
    );
    const collections = await NftSet.find({author: _id}).populate(
        'nfts',
        {'imageUrl': 1}
    ).populate(
        'author',
        {'name': 1, 'avatarUrl': 1}
    );

    res.status(200).json({created, owned, collections});
};

module.exports = getProfileNft;