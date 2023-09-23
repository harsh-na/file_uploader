import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();
const DBConnection=()=>{
        const USERNAME = process.env.DB_USERNAME;
        const PASSWORD = process.env.DB_PASSWORD;
    const MONGODB_URI =
      `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.zs2uaha.mongodb.net/`;
    try{
        mongoose.connect(MONGODB_URI, {useNewUrlParser: true})
      console.log('Database connected successfully');
    }
        catch(e){
            console.error(`Error while connecting with the database`, error.message);
        }
}
export default DBConnection;