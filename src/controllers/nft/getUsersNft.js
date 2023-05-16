const {Nft, NftSet} = require('../../models');

const getUsersNft = async (req, res) => {
    const {_id} = req.user;

    const created = await Nft.find({author: _id}, {'imageUrl': 1, 'title': 1, 'author': 1, 'price': 1});
    const owned = await Nft.find({owner: _id}, {'imageUrl': 1, 'title': 1, 'author': 1, 'price': 1});
    const collections = await NftSet.find({author: _id}).populate(
        'nfts',
        {'imageUrl': 1}
    );
    res.status(200).json({created, owned, collections});
};

module.exports = getUsersNft;