var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    if(animal === "pig"){
        res.send("The " + animal + " says 'Oink'");
    }
    if(animal === "cow"){
        res.send("The " + animal + " says 'Moo'");
    }  
    if(animal === "dog"){
        res.send("The " + animal + " says 'Woof Woof!'");
    }
    else {
        res.send("I've got no idea what does this animal say..");
    }
});

app.get("/repeat/:text/:times", function(req, res) {
    var text = req.params.text;
    var timesString = req.params.times;
    var times = Number(timesString);
    var textRepeated = "";
    for(var i = 0; i < times; i++) {
            textRepeated += text + " ";
    }
    res.send(textRepeated);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});