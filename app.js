const express = require('express');
const app=express();
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.get("/",function(req,res){
    res.render("Dashboard");
});
app.get("/Blank",function(req,res){
    res.render("Blank");
});
app.listen(80,function()
{
    console.log("server started at http://localhost")
});