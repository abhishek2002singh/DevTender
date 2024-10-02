const express = require('express');
const app = express();
const dbConnect = require('./config/database');
const cookieParser = require('cookie-parser')
const corse = require('cors')


//add middleware from express
app.use(corse({
    origin: "http://localhost:5173",
    credentials:true,
}));
app.use(express.json())
app.use(cookieParser())


//routes
const authRouth = require('./routes/auth')
const profileRouter = require('./routes/profile')
const requestRouter = require('./routes/request');
const userRouter = require('./routes/user');


app.use('/' ,authRouth)
app.use('/' ,profileRouter)
app.use('/' ,requestRouter)
app.use('/',userRouter)



dbConnect().then(() => {
    console.log('Connection successful');
    app.listen(3000, () => {
        console.log('Code is running on port 3000');
    });
}).catch(err => {
    console.error('Database connection failed:', err);
});


 