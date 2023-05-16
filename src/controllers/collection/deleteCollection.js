const {NftSet} = require('../../models');

const deleteCollection = async (req, res) => {
    const {_id} = req.params;

    await NftSet.findByIdAndRemove(_id);

    res.status(200).json({_id});
};

module.exports = deleteCollection;