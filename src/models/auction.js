const mongoose = require('mongoose');

const auctionSchema = new mongoose.Schema({
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    nft: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Nft'
    },
    bids: {
        type: [
            {
                bidder: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User'
                },
                bid: {
                    type: String
                }
            }
        ]
    },
    length: {
        type: Number
    }
}, {versionKey: false, timestamps: true});

const Auction = mongoose.model('Auction', auctionSchema);

module.exports = Auction;
