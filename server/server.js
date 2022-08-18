const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userInfo = require("./model/user_model")
const app = express();
app.use(express.json({limit: "30mb",extended:true}));
// app.use(express.urlencoded({limit: "30mb",extended:true}));
app.use(cors())
require("dotenv").config();

const PORT = process.env.PORT || 3001;
app.listen(PORT,console.log(`Server running on ${PORT}`))
//const mongodb = 'mongodb+srv://NetFlixClone:NetFlixClone123@test.setebr1.mongodb.net/?retryWrites=true&w=majority'
const mongodb = "mongodb://localhost/instaclone"
mongoose.connect(mongodb,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log("Connected to DB"))
.catch(err=>console.log(err));


app.get('/',(req,res)=>{
    userInfo.find({}).then((userData)=>{
        res.status(200).send(userData)
    })
})
const DateStr = new Date();
const day = DateStr.getDate();
const month = DateStr.getMonth();
const year = DateStr.getFullYear();
const date = `${day}/${month}/${year}`

app.post('/',(req,res)=>{
    console.log(req.body.image)
    userInfo.create({...req.body,date: date}).then(()=>{
        res.status(200).redirect("/")
    })
})
