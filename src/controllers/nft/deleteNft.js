const {Nft} = require('../../models');

const deleteNft = async (req, res) => {
    const {_id} = req.params;

    await Nft.findByIdAndRemove(_id);

    res.status(200).json({_id});
};

module.exports = deleteNft;