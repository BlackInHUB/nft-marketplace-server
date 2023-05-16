const mongoose = require('mongoose');

const nftSetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    nfts: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Nft'}
    ]
}, {versionKey: false});

const NftSet = mongoose.model('NftSet', nftSetSchema);

module.exports = NftSet;
