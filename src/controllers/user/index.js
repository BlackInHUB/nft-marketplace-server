const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const update = require('./update');
const current = require('./current')
const allUsers = require('./allUsers');

module.exports = {
    register,
    login,
    logout,
    update,
    current,
    allUsers
};