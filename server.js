const express = require("express");
const path = require("path")
const spooky = require("./info")

const page = express();


page.set("view engine","ejs");
page.set("views",path.join(__dirname,),"views")

function home(req, res){
    res.send("<h1>Hello World!</h1>");
}

function portMsg(){
    console.log("Listening on port 3000");
}

function spook(req, res){
    res.send("<h1>sPoOkY mOnTh</h1>");
}
function renderHome(req, res){
    res.render("./views/home");
}

page.get("/",home);
page.get("/spook",spook);
page.get("/home",renderHome);

page.listen(3000, portMsg);
