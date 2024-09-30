const express = require('express')
const userRouter = express.Router()
const {userAuth}=require('../middlewares/auth')
const connectionRequestModel = require('../models/connectionRequest')
const { populate } = require('../models/user')

//get all the pending connnection request for loggin user
userRouter.get('/user/requests/received' , userAuth , async(req , res)=>{
    try{
        const loggedUser = req.accessUser

        console.log("Connection Request Model:", connectionRequestModel);

        const connectionRequest = await connectionRequestModel.find({
            toUserId : loggedUser._id,
            status:"interested"
        }).populate('fromUserId' , 'firstName lastName  age  gender about  skills')
        // populate('fromUserId' , ['firstName','lastName'])

        res.json({message: "data fetch successfully", data : connectionRequest})

    }catch(err){
        res.status(400).send("ERROR: " +err.message)

    }
})

module.exports = userRouter