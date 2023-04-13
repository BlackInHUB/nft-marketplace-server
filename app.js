const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = new express();

const routers = require('./src/routes');

app.use(cors({origin: "*"}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));

app.use('/user', routers.user);
app.use('/nft', routers.nft);

app.use((req, res) => {
    res.status(404).json({message: 'Not found'});
});

app.use((error, req, res, next) => {
    const {status = 500, message = 'Server error'} = error;
    res.status(status).json({message});
})

module.exports = app;