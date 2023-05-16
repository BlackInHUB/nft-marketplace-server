const {NftSet} = require('../../models');

const create = async (req, res) => {
    const {_id} = req.user; 
    const newSet = await NftSet.create({author: _id, ...req.body});
    const response = await NftSet.findById(newSet._id).populate(
        'nfts',
        {'imageUrl': 1}
    )

    res.status(201).json(response);
};

module.exports = create;