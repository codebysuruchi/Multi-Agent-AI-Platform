import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";

dotenv.config();

const port=process.env.PORT

const app=express();
app.arguments(express.json());

app.get('/',(req,res)=>{
    res.json({message: "Hello from auth services"});
});

app.listen((port),()=>{
    console.log(`services auth server is running on port ${port}`);
    connectDb();
});