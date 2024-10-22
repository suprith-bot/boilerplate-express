let express = require('express');
let app = express();
require('dotenv').config();
console.log("hello world !");
app.use("/public",express.static(__dirname+"/public"));
app.use((req,res,next)=>{
    console.log(req.method+" "+req.path+" - "+req.ip);
    next();
});
app.get('/now',(req,res,next)=>{
req.time=new Date().toString();
next();
},(req,res)=>{
    res.json({"time":req.time});
})
// app.get('/',(req,res)=>{
//     res.send("hello express");
// })
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
});
app.get('/json',(req,res)=>{
    if('uppercase'===process.env.MESSAGE_STYLE){
res.json({"message":"HELLO THIS IS THE TEST API"});}
else{
    res.json({"message":"hello this is the test api"});}
});
app.get('/:echo/word',(req,res)=>{
    res.json({"echo":req.params.echo});
});
app.route('/name').get((req,res)=>{
    res.json({"name":req.query.firstname+" "+req.query.lastname});
}).post((req,res)=>{
    res.json({"name":req.query.firstname+" "+req.query.lastname});
})



































 module.exports = app;
