const {Nft} = require('../../models');

const getUsers = async (req, res) => {
    const {_id} = req.user;
    const {category} = req.params;

    if (category === 'created') {
        const nfts = await Nft.find({author: _id}, {'imageUrl': 1, 'title': 1, 'author': 1, 'price': 1});

        return res.status(200).json({
            created: nfts
        });
    }; 
    
    if (category === 'owned') {
        const nfts = await Nft.find({owner: _id}, {'imageUrl': 1, 'title': 1, 'author': 1, 'price': 1});

        return res.status(200).json({
            owned: nfts
        });
    };
};

module.exports = getUsers;