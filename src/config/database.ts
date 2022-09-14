import mongoose from "mongoose";
require('dotenv').config()

mongoose.connect(process.env.MONGO_URL)

const db = mongoose.connection;

export default db;