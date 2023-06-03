const mongoose = require('mongoose');
const dotenv = require("dotenv")
const express = require('express');
const cookieParser = require('cookie-parser');
// const bodyParser = require("body-parser");
const app = express();

app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

 


dotenv.config({path:'./config.env'});
require('./db/conn');

// const User = require('./model/userSchema');

app.use(express.json());

//we link the router path 








app.use(require('./router/auth'))
const PORT = process.env.PORT;

// middleware
// const middleware =(req,res,next) =>{
//    console.log(`hello my Middleware`);
//    next();

// }
 

 
  
// app.get('/about',middleware ,(req,res) =>{
//    console.log(`hello my About`);
//    res.send(`Hello About from the server`)
// })
// app.get('/contact',(req,res) =>{
//    res.cookie("Test",'atul')
//    res.send(`Hello contact  from the server`)
// })
// app.get('/signin',(req,res) =>{
//    res.send(`Hello  signin from the server`)
// })
// app.get('/signup',(req,res) =>{
//    res.send(`Hello  signup  from the server`)
// })
app.listen(PORT ,() =>{
   console.log(`server is listening at ${PORT}`)
})
