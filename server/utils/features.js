import { asyncError } from "../middleWares/error.js"
import DataUriParser from 'datauri/parser.js'
import nodemailer, { createTransport } from 'nodemailer'
import path from 'path'

export const getDataUri = (file) => {
    const parser = new DataUriParser()
    const extname = path.extname(file.originalname).toString()
    return parser.format(extname, file.buffer)
}






export const sendJwtToken = asyncError(async (user, res, statusCode, message) => {
    const token = await user.gernerateToken()

    res.status(statusCode).cookie("token", token, {
        ...cookieOption,
        expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)
    },).json({
        success: true,
        status: statusCode,

        token,
        message: message,
    })
})
export const cookieOption = {
    secure: process.env.NODE_ENV === 'development' ? false : true,
    httpOnly: process.env.NODE_ENV === 'development' ? false : true,
    sameSite: process.env.NODE_ENV === 'development' ? false : "none",
}

// send mail

export const sendEmail = async (subject, to, text) => {

    const transpoter = createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })

    await transpoter.sendMail({
        to,
        subject,
        text
    })
}