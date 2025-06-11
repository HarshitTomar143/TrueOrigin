import mongoose from "mongoose";

export async function connect(){
    try {
        
        mongoose.connect(process.env.mongo_url!); // use of ! because we are telling TS that this will work 100%
        const connection= mongoose.connection;

        connection.on('connected', ()=>{
            console.log('MongoDB connected Successfully');
        })

        connection.on('error', (err)=>{
            console.log('MongoDB connection error. Please make sure mongoDb is Running. '+err);
            process.exit();
        })

    } catch (error) {
        console.log("Something went wrong!");
        console.log(error);
    }
}