//Import the data from the friends.js file
const friends = require('../data/friends');

//export routes to be used in the server.js file
module.exports = function(app){

    app.get('/api/friends', function(req, res){
        return res.json(friends);
    });


    app.post('/api/friends', function(req, res) {
        let newFriend = req.body;
        let diffArr = [];
        res.json(newFriend);
        friends.newFriend.push(newFriend)
     
        //quick function to find the difference between two values
        function diff(a,b) {
            return Math.abs(a-b);
        };
        
        //loop through each potential match
        friends.friendData.forEach(function(element){
            let diffScore = 0;

            //loop through each answer and find the difference
            element.scores.forEach(function(score, index){
                let a = parseInt(score);
                let b = parseInt(friends.newFriend[0].scores[index])

                diffScore += diff(a,b)
            })

            //push the difference to the array of differences
            diffArr.push(diffScore);
        })

        console.log(diffArr)
        console.log(Math.min(...diffArr))

        let lowestVal = Math.min(...diffArr);
        let lowIndex = diffArr.indexOf(lowestVal)
        console.log(`index of ${lowestVal} is ${lowIndex}`)
        let friendMatch = friends.friendData[lowIndex];

        console.log(friendMatch.name)


    })


};