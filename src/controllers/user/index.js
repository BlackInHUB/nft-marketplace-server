const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const update = require('./update');
const current = require('./current')
const getTopRanked = require('./getTopRanked');
const getProfile = require('./getProfile');
const following = require('./following');
const getRankings = require('./getRankings');

module.exports = {
    register,
    login,
    logout,
    update,
    current,
    getTopRanked,
    getProfile,
    following,
    getRankings
};