const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    await mongoose.connect(process.env.DATABASE_URI).then(() => {
        console.log("DB connected")
    })
}

module.exports = connectDB