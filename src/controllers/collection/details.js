const {NftSet} = require('../../models');

const details = async (req, res) => {
    const {_id} = req.params;

    const collection = await NftSet.findById(_id).populate({
        path: 'nfts',
        select: {'imageUrl': 1, 'title': 1, 'author': 1, 'price': 1}, populate: {
            path: 'author',
            select: {'name': 1, 'avatarUrl': 1}
        }
    }).populate(
        'author',
        {'avatarUrl': 1, 'name': 1}
    );
    
    res.status(200).json(collection);
};

module.exports = details;