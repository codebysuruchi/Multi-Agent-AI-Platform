import React from 'react'
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firebaseUId:{
        type: String,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
    type: String,
    required: true,
    unique: true
    },
    
    avatar:String,
});

const User = mongoose.model('User', userSchema);

export default User;
