import app from '../app.js'
import Cloudinary from 'cloudinary'
import { connectDB } from './data/database.js'


// database connection
connectDB()


Cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME, api_key: process.env.CLOUDINARY_APIKEY,
    api_secret: process.env.CLOUDINARY_SECRET
})






app.listen(process.env.PORT, () => {
    console.log(`server is running on:=> ${process.env.PORT}, in ${process.env.NODE_ENV} mode`);
})