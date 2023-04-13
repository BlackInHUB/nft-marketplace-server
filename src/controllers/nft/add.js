const {Nft} = require('../../models');
const {toCloude} = require('../../helpers');

const add = async (req, res) => {
    const {_id: author} = req.user;
    const {path, fieldname, filename} = req.file;

    const {url: imageUrl} = await toCloude(path, fieldname, filename);

    const newNft = await Nft.create({...req.body, author, imageUrl});

    res.status(201).json(newNft);
};

module.exports = add;