require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const {DB, PORT} = process.env;

mongoose.connect(DB)
    .then(() => app.listen(PORT))
    .then(console.log(('DB connected. Server running')))
    .catch(error => {
        console.log(error.message);
        process.exit(1);
    });

