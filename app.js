require('dotenv').config()

const express = require('express');
const app = express();
const port = 5001;

/* middlewares */
const path = require('path');
const logger = require('morgan');
const helmet = require('helmet')

app.use(helmet())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

/* routes */
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

/* Get Express app to serve React app */
app.use(express.static(path.join(__dirname, "view", "build")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "view", "build", "index.html"));
});

const listener = app.listen(port, function () {
    console.log('Listening on port ' + listener.address().port); //Listening on port 5001
});

module.exports = app;
