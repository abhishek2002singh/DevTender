const express = require('express');

const app = express();

const dbConnect = require('./config/database');

const User = require('./models/user');
const e = require('express');

//add middleware from express
app.use(express.json())



app.post('/signup' , async(req , res)=>{
    const user = new User(req.body)
    console.log(req.body)
  try{
    await user.save()
    res.send('data pass successfully')

  }catch{
    res.status(401).send('data are not save')

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

app.patch('/update' , async(req , res)=>{
  const updateUserId=req.body._id
  const updateData = req.body; 
  try{
         const updatedUser = await User.findByIdAndUpdate(
      updateUserId,
      updateData,
      { new: true, runValidators: true }
       // Options to return the updated document and run validation
    );

        if(!updatedUser){
          res.status(404).send('user not found')
        }else{
          res.send(updatedUser)
        }
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


 