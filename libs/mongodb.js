import mongoose from "mongoose";

const connectMongodb = async() => {
    try {
       await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected---");
    } catch (error) {
        console.log("Mongo Connection Error : ",error);
    }
}

export default connectMongodb;