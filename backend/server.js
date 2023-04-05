require('dotenv').config()
//const cors = require("cors");
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

const app = express()
//app.use(cors());
app.use(express.json())

app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin');
    res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'GET','POST','PUT','PATCH','DELETE');
        return  res.status(200).json({});
    }
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

mongoose.connect(process.env.MONGO_URL_ATLAS,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        
        console.log("listening to port",process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error)
}
)


{/**MONGO_URL=mongodb://127.0.0.1:27017/mernapp**/}
