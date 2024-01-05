import mongoose from 'mongoose';
import 'dotenv/config';
const mongooseConnection = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        .then(()=>{
            console.log('Connected to MongoDB')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    catch(err){
        console.log(err)
    }
}

export default mongooseConnection;