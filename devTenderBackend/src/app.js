const express = require('express');

const app = express();

const dbConnect = require('./config/database');

const User = require('./models/user')



app.post('/signup' , async(req , res)=>{
    const user = new User({
    firstName:'abhishek',
    lastName:'singh',
    emailId:'abhishek@gmail.com',
    password:'123456'
  })
  try{
    await user.save()
    res.send('data pass successfully')

  }catch{
    res.status(401).send('data are not save')

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


 