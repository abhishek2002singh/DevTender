const express = require('express');

const app = express();

const dbConnect = require('./config/database');

const User = require('./models/user');
const  bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');

//add middleware from express
app.use(express.json())
app.use(cookieParser())
const {validateSignUpData} = require('./utils/validation');
const { userAuth } = require('./middlewares/auth');
const user = require('./models/user');



app.post('/signup' , async(req , res)=>{
    
   
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
app.post('/login', async (req, res) => {
  try {
    const { emailId, password } = req.body;
    
    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Email ID not present in the database");
    }
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {

      //create a jwt token
       
      const token = await jwt.sign({_id: user._id} , "DEV@Tinder$790" ,{expiresIn : '7d'})
      console.log(token)

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

// user profile
app.get('/profile',userAuth , async(req , res)=>{

  try{ 

      const accessUser = req.accessUser
      res.send(accessUser)

  }catch (err) {
    res.status(400).send("Error: " + err.message);
  }

 
})

app.post('/sendConnectonRequest' ,userAuth ,  (req , res)=>{

 const accessUser = req.accessUser
  console.log("sending the connection request")

  res.send(accessUser.firstName +" send the connection request")
})

dbConnect().then(() => {
    console.log('Connection successful');
    app.listen(3000, () => {
        console.log('Code is running on port 3000');
    });
}).catch(err => {
    console.error('Database connection failed:', err);
});


 