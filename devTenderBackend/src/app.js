const express = require('express')

const app = express()


app.get('/user' , (req ,res)=>{
    console.log(req.query)
    res.send({firstName : 'abhishek' , lastName : 'yadav'})
})

// app.post('/user' , (req ,res)=>{
   
//    res.send("data successfully savsed to database")
// })

// app.delete('/delete' , (req ,res)=>{
   
//     res.send("data delete savsed to database")
//  })
 


app.listen(3000 , ()=>{
    console.log('code is running on port  n 3000')
})