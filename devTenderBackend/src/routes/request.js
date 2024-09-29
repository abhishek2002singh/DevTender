const express = require('express');
const { userAuth } = require('../middlewares/auth');
const User = require('../models/user')
const connectionRequestModel = require('../models/connectionRequest');

const requestRouter = express.Router();

requestRouter.post('/request/send/:status/:toUserId', userAuth, async (req, res) => {
    try {
        const fromUserId = req.accessUser._id;
        const toUserId = req.params.toUserId;
        const status = req.params.status;

        const allowStatus = ["ignored" , "interested"]
        if(!allowStatus.includes(status)){
          return res.status(400).json({message : "invalid status type: " + status})
        }

        const existingConnectionRequest = await connectionRequestModel.findOne({
          $or:[
            { fromUserId , toUserId},
            { fromUserId:toUserId, toUserId:fromUserId}
          ]
        })
        if(existingConnectionRequest){
          return res.status(400).send({message : 'connection request already exiest'})
        }

        const toUser = await User.findById(toUserId)
        if(!toUser){
          return res.status(400).json({message : "user not found"})
        }

        const connectionRequest = new connectionRequestModel({
            fromUserId,
            toUserId,
            status,
        });

        const data = await connectionRequest.save();

        res.json({
            message:  req.accessUser.firstName +" is " +status + " in " +toUser.firstName ,
            data,
        });
    } catch (err) {
        res.status(404).send("ERROR: " + err.message);
    }
});

module.exports = requestRouter;