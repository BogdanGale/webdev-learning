var express = require("express");
var app = express();



// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});
// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});
// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
    console.log("Someone made a request!");
    res.send("MEOW!!!");
});

app.get("/r/:subName", function(req, res) {
    var subreddit = req.params.subName.toUpperCase();
    res.send("This is the " + subreddit + " subreddit");
});

app.get("/r/:subName/comments/:id/:title", function(req, res) {
    res.send("This is the comments area");
});

app.get("*", function(req, res) {
    res.send("This is a star!");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});