import mongoose from "mongoose";

export default async function connection(req,res) {
    const db=await mongoose.connect(process.env.DB_URL+process.env.DB_NAME);
    console.log("Database connected successfully");
    return db
    
    
}