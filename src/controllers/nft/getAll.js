const {Nft} = require('../../models');

const getAll = async (req, res) => {
    const nfts = await Nft.find({});

    res.status(200).json(nfts);
};

module.exports = getAll;