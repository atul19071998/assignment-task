 // the following code snippets show the runtime error when we run the code  the pathname is spelling mistake it show the runtime eerror .
 const express = require('express');
 const fs = require('fs');
 const app = express();
 const PORT = 5000;

 app.listen(PORT,()=>console.log(`server is listening on ${PORT}`));

 fs.readFile('sampe.txt','utf-8',(err,data)=>{
    if(err) throw err;
    else{
        console.log(data);
    }
 })

 app.get('/',(req,res)=>{
    res.send('hello worldd')
 })