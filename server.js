var express = require('express');  
var app = express();  
var path=require('path');


app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);
// app.use(express.static(path.join(__dirname,'client')));
app.use(express.static(path.join(__dirname + "/public/")));

app.listen(3000);
console.log("server is running on the 3000 port...");