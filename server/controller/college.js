import { asyncError } from "../middleWares/error.js";
import colleges from "../models/college.js";


export const getAllRelated = asyncError(async (req, res, next) => {
    const { name, email, percentile } = req.body;


    const data = await colleges.find({
        "dept.percentile": {
            $lte: percentile
        }
    })

    console.log(data);


    res.status(200).json({
        data
    })

})
export const createCollege = asyncError(async (req, res, next) => {
    // const { name, email, percentile } = req.body;


    const data = await colleges.create()



    res.status(200).json({
        data
    })

})