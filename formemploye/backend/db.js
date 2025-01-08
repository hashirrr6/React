const mongoose =require('mongoose')
require ('dotenv').config();
const connectDB=async()=>{
    try {
       mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log(" Database Connected ")
    } catch(err) {
        console.log("Database not Connecting",err)
    }
    }
    module.exports = connectDB;