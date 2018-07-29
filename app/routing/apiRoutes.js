//Import the data from the friends.js file
const friends = require('../data/friends');

//export routes to be used in the server.js file
module.exports = function(app){

    app.get('/api/friends', function(req, res){
        return res.json(friends);
    });


    app.post('/api/friends', function(req, res) {
        let newFriend = req.body;
        res.json(newFriend);
        friends.newFriend.push(newFriend)
    })


};