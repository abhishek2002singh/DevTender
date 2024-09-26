const express = require('express')
const { userAuth } = require('../middlewares/auth');

const requestRouter = express.Router()

requestRouter.post('/sendConnectonRequest' ,userAuth ,  (req , res)=>{

    const accessUser = req.accessUser
     console.log("sending the connection request")
   
     res.send(accessUser.firstName +" send the connection request")
   })

   module.exports = requestRouter