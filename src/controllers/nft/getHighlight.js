const {Nft} = require('../../models');

const getHighlight = async (req, res) => {
    const highlight = await Nft.aggregate([{$sample: {size: 1}}]);
    await Nft.populate(highlight, {path: 'author', select: {'name': 1, 'avatarUrl': 1}});
    
    res.status(200).json(highlight[0]);
};

module.exports = getHighlight;