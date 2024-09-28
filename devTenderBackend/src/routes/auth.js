const  express=require('express')


const authRouth = express.Router();
const User = require('../models/user');
const  bcrypt = require('bcrypt')
const {validateSignUpData} = require('../utils/validation');

authRouth.post('/signup' , async(req , res)=>{
    
   
    try{
      //validation of data
      
      validateSignUpData(req)  
  
      const {firstName ,lastName , emailId ,password} = req.body
  
      //encrypt the password
      const passwordHash = await bcrypt.hash(password , 10);
      console.log(passwordHash)
      const user = new User({
        firstName , lastName ,emailId ,password:passwordHash
      })
      await user.save()
      res.send('data pass successfully')
  
    }catch(err){
      res.status(401).send("Error :" +err.message)
  
    }
  })

  //lognin the user
authRouth.post('/login', async (req, res) => {
    try {
      const { emailId, password } = req.body;
      
      const user = await User.findOne({ emailId: emailId });
      if (!user) {
        throw new Error("Email ID not present in the database");
      }
      
      const isPasswordValid = await user.validatePassword(password)
      if (isPasswordValid) {
  
        //create a jwt token
         
        const token = await user.getJWT();
  
        //add the token to cookie and send the respande back the user
         res.cookie("token" ,token ,{ expires :new Date(Date.now()+8*3600000)})
  
        res.send("Login successful!!!!");
      } else {
        throw new Error("Password is not correct");
      }
      
    } catch (err) {
      res.status(400).send("Error: " + err.message);
    }
  });

  authRouth.post('/logout' , (req ,res)=>{
    res.cookie("token" , null , {
        expires: new Date(Date.now())

    })
    res.send("logout successfully")
  })

  module.exports = authRouth

