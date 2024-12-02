require("dotenv").config();
const express = require("express");
const dbgr = require('debug')('app:db');
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
      const connection = await mongoose.connect(process.env.MONGOD_URI, {
      });
      if(process.env.NODE_ENV==='development'){
        dbgr("MongoDB connected");
      }

    } catch (error) {
      if(process.env.NODE_ENV==='development'){
        console.log("Database Connection Error",error);
      }
      process.exit(1);
    }
  };


  module.exports = connectDB;