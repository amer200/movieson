require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs');

app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())

// serve static files
app.use('/', express.static(path.join(__dirname, 'public')))
// config ejs
app.set('view engine', 'ejs');


const mainRoutes = require('./routes/main');

app.use('/', mainRoutes);
mongoose.connect(process.env.db_url)
    .then(result => {
        console.log(`conect datt base on ${process.env.db_url}`);
        app.listen(process.env.port)
        console.log(`conected on port ${process.env.port}`)
    })
    .catch(err => {
        console.log(err)
    })