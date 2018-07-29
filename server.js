//Import & set up dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//Set up express
const app = express();
const PORT = process.env.PORT || 8080;

//using express & body-parser to parse data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routing/htmlRoutes')(app);
require('./app/routing/apiRoutes')(app);

//start the server listening
app.listen(PORT, function() {
    console.log('Litening on port: ', PORT)
});

