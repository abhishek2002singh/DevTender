const express = require('express')

const app = express()

const {adminAuth , userAuth} = require('./middlewares/auth')

//middleware for auth
app.use('/admin' , adminAuth);

app.post('/user/login' , (req , res)=>{
    res.send('user loged in successfilly')
})

app.get('/user/data' ,userAuth , (req , res)=>{
        res.send('user data send')
})

app.get('/admin/deleteUser' , (req , res)=>{
    res.send('delete a user')
})


app.listen(3000 , ()=>{
    console.log('code is running on port  n 3000')
})