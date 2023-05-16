const {NftSet} = require('../../models');

const details = async (req, res) => {
    const {_id} = req.params;

    const collection = await NftSet.findById(_id).populate(
        'nfts',
        {'imageUrl': 1, 'title': 1, 'author': 1, 'price': 1}
    );
    
    res.status(200).json(collection);
};

module.exports = details;