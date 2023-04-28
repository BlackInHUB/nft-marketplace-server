const {Nft, User} = require('../../models');
const {toCloude} = require('../../helpers');

const add = async (req, res) => {
    const {_id: author} = req.user;
    const {path, fieldname, filename} = req.file;

    const {url: imageUrl} = await toCloude(path, fieldname, filename);

    const newNft = await Nft.create({...req.body, author, imageUrl, details: JSON.parse(req.body.details[0])});
    await User.findByIdAndUpdate({_id: author}, {$push: {"created": newNft._id}});

    res.status(201).json({
        _id: newNft._id,
        title: newNft.title,
        imageUrl: newNft.imageUrl,
        price: newNft.price,
        author: newNft.author
    });
};

module.exports = add;