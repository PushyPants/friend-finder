//dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());








app.listen(PORT, function() {
    console.log('Litening on port: ', PORT)
});

