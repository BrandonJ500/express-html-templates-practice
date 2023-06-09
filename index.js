const express = require("express");
const app = express();
const path = require('path');
const subredditData = require("./data.json")


app.use(express.static(path.join(__dirname, 'public')))


app.set('view engine', "ejs");
app.set('views', path.join(__dirname, '/views'))

app.get("/",(req,res)=>{

    res.render("home.ejs", {name: "Home"});
}) 
app.get('/r/:subreddit', (req,res)=> {
    const {subreddit} = req.params
    const data = subredditData[subreddit]
    res.render("subreddit", {...data})
})

app.get('/cats', (req,res)=>{
    const cat = ["biscut", "gravy","shela"];
    res.render("cats", {cat});
})


app.get('/rand', (req,res)=> {
    const num =  Math.floor((Math.random() * 10) + 1);

    res.render('random', {rand: num, name:"Random Number"});   
})

app.listen(3000, ()=> {
    console.log("Listening on port 3000")
})