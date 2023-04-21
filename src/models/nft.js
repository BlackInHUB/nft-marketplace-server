const mongoose = require('mongoose');

const nftSchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    details: {
        type: Object
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tags: {
        type: String
    },
    price: {
        type: String,
        required: true
    },
    nftSet: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NftSet'
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        enum: ['on-sale', 'sold', 'auction']
    }
}, {versionKey: false, timestamps: true});

const Nft = mongoose.model('Nft', nftSchema);

module.exports = Nft;
