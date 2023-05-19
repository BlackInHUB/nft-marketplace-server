const {Nft} = require('../../models');

const getDetails = async (req, res) => {
    const {_id} = req.params;

    const nft = await Nft.findById(_id).populate(
        'author',
        {'name': 1, 'avatarUrl': 1}
    );
    const moreFromAuthor = await Nft.find({author: nft.author}, {'title': 1, 'imageUrl': 1, 'price': 1, 'author': 1}).populate(
        'author',
        {'name': 1, 'avatarUrl': 1}
    );

    res.status(200).json({nft, moreFromAuthor});
};

module.exports = getDetails;