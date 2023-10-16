const express = require("express");
//const spooky = require("./info")

const page = express();
//const scary = spooky();

function home(req, res){
    res.send('<h1>Hello World!</h1>');
}

function portMsg(){
    console.log('Listening on port 3000');
}

function spook(req, res){
    res.send('<h1>sPoOkY mOnTh</h1>');
}

page.get("/",home);
page.get("/spook",spook);

page.listen(3000, portMsg);
