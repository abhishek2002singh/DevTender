const express = require('express');

const app = express();

const dbConnect = require('./config/database');

const User = require('./models/user');
const  bcrypt = require('bcrypt')

//add middleware from express
app.use(express.json())
const {validateSignUpData} = require('./utils/validation')



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

//get the user through the emailid

app.get('/user' , async(req , res)=>{
  const userEmail = req.body.emailId
  try{
    const users = await User.find({emailId:userEmail})
    if(users.length===0){
      res.status(404).send('user not found')
    }else{
      res.send(users)
    }
  }catch(err){
    res.status(400).send('something went wrong')
  }
})

//feed all user 

app.get('/feed' , async(req , res)=>{

  try{
    const alluser =await User.find({})
    if(!alluser){
      res.status(404).send('user not found')
    }
    else{
      res.send(alluser)
    }

  }catch(err){
    res.status(404).send('something went wrong')
  }
})

//get user only one using findone method

app.get('/singleuser' , async(req , res)=>{
  const oneuser = req.body.emailId
  try{
    
    const check =await User.findOne({emailId:oneuser})
    if(!check){
      res.status(404).send('user not found')
    }else{
      res.send(check)
    }

  }catch(err){
    res.status(404).send('something went wrong')
  }
})

//delete the data from database

app.delete('/delete' , async(req , res)=>{
  const deleteuser = req.body._id
  try{
    const deletedata = await User.findByIdAndDelete({_id :deleteuser})
    if(!deletedata){
      res.status(404).send('user not found')
    }else{
      res.send(deletedata)
    }

  }catch(err){
    res.status(404).send('something went wrong')
  }
})

//update the data from database

app.patch('/update/:updateUserId' , async(req , res)=>{
  const updateUserId=req.params.updateUserId
  const updateData = req.body; 
  try{
      
      const ALLOWED_UPDATES = ["updateUserId","photoUrl" , "about" , "gender" , "age" , "skills"];
      const isUpdateAllowed = Object.keys(updateData).every((k)=>
        ALLOWED_UPDATES.includes(k)
      );
      if(!isUpdateAllowed){
        throw new Error("update not allow")
      }
      if(updateData?.skills.length >10){
        throw new error('skills is more than ten')
      }

      const updatedUser = await User.findByIdAndUpdate(
      updateUserId,
      updateData,
      { new:true, runValidators: true }
       // Options to return the updated document and run validation
    );

      console.log(updatedUser)
          res.send("user updates successffully")
       
  }catch(err){

    res.status(404).send('something went wrong')
  }
})

dbConnect().then(() => {
    console.log('Connection successful');
    app.listen(3000, () => {
        console.log('Code is running on port 3000');
    });
}).catch(err => {
    console.error('Database connection failed:', err);
});


 