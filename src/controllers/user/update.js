const {User} = require('../../models');
const {httpError, toCloude} = require('../../helpers');

const update = async (req, res) => {
    const {_id} = req.user;

    const user = await User.findById(_id);

    if (!user) {
        throw httpError(401);
    };

    if (req.files) {
        if (req.files['avatarUrl']) {
            const {path, fieldname, filename} = req.files['avatarUrl'][0];
    
            const {url: avatarUrl} = await toCloude(path, fieldname, filename);
    
            await User.findByIdAndUpdate(_id, {avatarUrl}, {new: true});
    
            return res.status(200).json({avatarUrl});
        };
    
        if (req.files['profileCover']) {
            const {path, fieldname, filename} = req.files['profileCover'][0];
    
            const {url: profileCover} = await toCloude(path, fieldname, filename);
    
            await User.findByIdAndUpdate(_id, {profileCover}, {new: true});
    
            return res.status(200).json({profileCover});
        };
    }

    await User.findByIdAndUpdate(_id, req.body, {new: true});

    res.status(200).json(req.body);
};

module.exports = update;