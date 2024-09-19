const express = require('express')

const app = express()


// app.get('/user' , (req ,res)=>{
//     console.log(req.query)
//     res.send({firstName : 'abhishek' , lastName : 'yadav'})
// })

app.use('/user' , (req , res ,next)=>{
    console.log('handling the routes user 1')
    // res.send('response 1 ')
    next()
}
,
(req , res ,next)=>{
    console.log('handling the routes user 2')
    // res.send('response 2 ')
    next()
},
(req , res ,next)=>{
    console.log('handling the routes user 3')
    // res.send('response 3 ')
    next()
},
(req , res ,next)=>{
    console.log('handling the routes user 4')
    res.send('response 4 ')
}
)




app.listen(3000 , ()=>{
    console.log('code is running on port  n 3000')
})