 const express = require('express');
const router = express.Router();
const multer = require('multer');
 
const bcrypt = require('bcryptjs');
 var jwt = require('jsonwebtoken');
 require('../db/conn');
 const Authenticate = require("../middleware/authenticate");
 const cors = require('cors');
 const cookieParser = require("cookie-parser")
 router.use(cookieParser())
 
//Storage Setting
let storage = multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  
  //Upload Setting
  let upload = multer({
    storage,
  });
  
 
   



 
router.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
    })
  );
 
const User = require("../model/userSchema")
 
router.get('/', (req,res) =>{
    res.send(`Hello world from the server router`)
 });
 
 
 router.get('/logout',(req,res) =>{
    // console.log(`hello my logout page`);
    res.clearCookie('jwt',{path:"/"})
    res.status(200).send(`user Logout`)
 })
// router.get('/signin',(req,res) =>{
//    res.send(`Hello  signin from the server`)
// })
// router.post('/signup',(req,res) =>{
//    res.send(`Hello  signup  from the server`)
// })

 // async await 
 router.post('/register' ,upload.single('photo'), async(req,res)=>{

    const { name , email ,photo ,password,cpassword} = req.body
 
    console.log(req.body);

    if(!name || !email || !photo   ||!password ||!cpassword){
        return res.status(422).json({ error :" pls filled the field property "})
    }

    try{
      //  console.log(photo,"line no .77");
      //  console.log(req.file ,"line no.81")
      //  console.log(req.file.filename ,"line no.79");
      //  console.log(storage.filename, 'line no.73')

       const userExist =  await User.findOne({email: email})
        
            if(userExist){
            return res.status(422).json({ error :" Email already exist  "})
    
            }else if(password != cpassword){
                return res.status(422).json({error:"password are not match"})
            }else{
                const user = new User({
                  name ,
                   email ,
                   photo,
                    // photo:req.file.filename,
                     
                     password,
                     cpassword})
             
             //yaha pe
            await user.save();
 
             
                res.status(201).json({ message: "user registered successfully"})
            }
            
          

    }catch(err){
        console.log(err);
    }
})

//login route

router.post('/signin',async (req,res) =>{
//  console.log(req.body)

    try{
      
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({error:"pls filled the data"})
        }

     const userLogin = await User.findOne({ email: email})
    
    //  console.log(userLogin,"88")
     if(userLogin){
        const isMatch = await bcrypt.compare(password,userLogin.password);
        
      



        if(!isMatch){
            res.status(400).json({error:"Invalid Credentials"})
        }else{
           
           let token =  await userLogin.generateAuthToken();
            // console.log(token,"token generate");
    
            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true,
              });
             res.json({message:"user Signin Succesfully"});

        }
     }else{
        res.status(400).json({error:"Invalid Credentials"})
     }
  
    
    }catch(err){
         console.log(err)
    }
})



 module.exports = router;
