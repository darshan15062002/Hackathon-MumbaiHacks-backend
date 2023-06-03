import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MOGO_URI)
        console.log(`server connected to database ${connection.host}`);
    } catch (error) {
        console.log('some Error occured', error);
        process.exit(1)
    }
}