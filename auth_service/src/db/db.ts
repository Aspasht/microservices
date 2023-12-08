import mongoose, { connect } from "mongoose";
import 'dotenv/config';



const connectionString = `${process.env.MONGO_URI}`;

async function connectToDatabase() {
    mongoose.connect(connectionString).then(() => {
        console.log('Connected to the database successfully.');
    }).catch((err) => {
        console.log(err);
    })
}


export { connectToDatabase };
