// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {
        typeof: String,
        required: true,
        unique: true,
        maxlength: 200,
    },
    username: {
        typeof: String,
        required: true,
        unique: false,
        trim: true,
        maxlength: 150,
    },
    password: {
        typeof: String,
        required: true,
        unique: false,
        trim: true,
        maxlength: 300,
    },
    insertedDate: {
        type: Date,
        default: Date.now,
    },
});
