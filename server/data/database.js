import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect('mongodb+srv://1032200336:$$dar$$123@cluster0.xwqwfn6.mongodb.net/college', { useNewUrlParser: true, useUnifideTopology: true, useCreateIndex: true })
        console.log(`server connected to database ${connection.host}`);
    } catch (error) {
        console.log('some Error occured', error);
        process.exit(1)
    }
}