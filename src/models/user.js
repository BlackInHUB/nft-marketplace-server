const mongoose = require('mongoose');

// const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: ''
    },
    avatarUrl: {
        type: String,
    },
    socialLinks: {
        type: Array,
    },
    followers: {
        type: [
            {type: mongoose.Schema.Types.ObjectId, ref: "User"}
        ]
    },
    profileCover: {
        type: String
    },
    owned: {
        type: [
            {type: mongoose.Schema.Types.ObjectId, ref: "Nft"}
        ]
    },
    iFollow: {
        type: [
            {type: mongoose.Schema.Types.ObjectId, ref: "User"}
        ]
    },
    token: {
        type: String
    }
}, {versionKey: false});


const User = mongoose.model('User', userSchema);

module.exports = User;