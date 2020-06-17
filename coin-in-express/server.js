var express = require("express");
var app = express();
var cors = require("cors");

var array = ["head","tail","head","tail","head","tail","head","tail","head","tail"]

app.use(cors());

app.get("/head",(req,res)=>{
        var choice = array[Math.floor(Math.random() * array.length)]
        res
            .status(200)
            .json({message:choice})
})



var port = 8000;
app.listen(port)
console.log(`server started at ${port}`)