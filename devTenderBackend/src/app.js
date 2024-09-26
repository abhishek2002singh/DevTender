const express = require('express');
const app = express();
const dbConnect = require('./config/database');
const cookieParser = require('cookie-parser')


//add middleware from express
app.use(express.json())
app.use(cookieParser())

//routes
const authRouth = require('./routes/auth')
const profileRouter = require('./routes/profile')
const requestRouter = require('./routes/request')

app.use('/' ,authRouth)
app.use('/' ,profileRouter)
app.use('/' ,requestRouter)



dbConnect().then(() => {
    console.log('Connection successful');
    app.listen(3000, () => {
        console.log('Code is running on port 3000');
    });
}).catch(err => {
    console.error('Database connection failed:', err);
});


 