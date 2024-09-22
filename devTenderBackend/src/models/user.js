const mongoose  = require('mongoose')

const userSchema =new mongoose.Schema({
    firstName: {
        type:String,
        required: true,
        minlength:4,
        maxlenght:50,
    },
    lastName:{
        type : String
    },
    emailId: {
        type : String,
        lowercase:true,
        required:true,
        unique:true,
        trim:true,

    },
    password: {
        type: String,
        required:true,
    },
    age: {
        type: Number,
        min: 18,

    },
    gender: {
        type : String,
        validate(value){
            if(!["male" , "female" , "others"].includes(value)){
                throw new error('gender data is not valid')
            }
        },
    },
    photoUrl :{
        type: String,
         default : "https://www.google.com/imgres?q=photos%20human%20logo&imgurl=https%3A%2F%2Fwww.freeiconspng.com%2Fthumbs%2Fhuman-icon-png%2Fperson-outline-icon-png-person-outline-icon-png-person-17.png&imgrefurl=https%3A%2F%2Fwww.freeiconspng.com%2Fimages%2Fhuman-icon-png&docid=lQF1mCAMouxjeM&tbnid=Ug-3jTAg8PskWM&vet=12ahUKEwjjyKWDm9OIAxUTnGMGHSPGBooQM3oECHQQAA..i&w=320&h=320&hcb=2&ved=2ahUKEwjjyKWDm9OIAxUTnGMGHSPGBooQM3oECHQQAA"
    },
    about:{
        type:String,
        default: "this is default about any one",
    },
    
    skills:{
        type: [String]
    },
},{
    timestamps:true,
})

// const User = mongoose.model('User' , userSchema )

// module.exports = User

module.exports = mongoose.model('User' , userSchema )