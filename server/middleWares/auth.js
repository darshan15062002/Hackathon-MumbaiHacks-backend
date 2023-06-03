import User from "../models/user.js"
import errorHandler from "../utils/error.js"
import { asyncError } from "./error.js"
import jwt from 'jsonwebtoken'


export const isAuthenticated = asyncError(async (req, res, next) => {
    const { token } = req.cookies

    if (!token) return next(new errorHandler("not logged in", 400))

    const decordedData = jwt.verify(token, process.env.JWT_SECRET)

    req.user = await User.findById(decordedData._id)

    next()
})