// Create web server 
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

// Create app
const app = express();

// Apply middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// Create routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('You sent a POST request');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});