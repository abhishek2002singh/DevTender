const express = require('express')

const app = express()




// app.get('/', (res , req)=>{
//     res.send('hii i am abhishek singh')
// })

app.get('/', (res , req)=>{
    req.send('hii i am abhishek singh  i am persuing b.tech from dr ram manohar lohia awadh university')
})

app.listen(3000 , ()=>{
    console.log('coude are running')
})