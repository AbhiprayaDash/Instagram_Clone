import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
export const mongoconnection =() =>{
    console.log('connected')
    return mongoose.connect(String(process.env.DB_URL));
}