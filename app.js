require("dotenv").config();
const mongoose = require("mongoose");
const path = require("path");
const express = require("express");
const flash = require("connect-flash");
const connectDB = require('./src/config/db')
const dbgr = require('debug')('app:app');
const router = express.Router();
const app = express();

connectDB();


router.get('/',function(req,res){
    res.send("hello")
})


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(flash());

// ejs setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


const port = process.env.PORT || 3000
app.listen(port,()=>{
    if(process.env.NODE_ENV==='development'){
        dbgr(`server is running on ${port}`);
    }
});



