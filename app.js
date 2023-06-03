import express from 'express'
import { config } from 'dotenv'
import { errorMiddleware } from './server/middleWares/error.js'
import cookieParser from 'cookie-parser'


import college from './server/routes/college.js'
import User from './server/models/user.js'

config({
    path: "./server/data/config.env"
})
const app = express()

// using middleware
app.use(express.json())

app.use(cookieParser())

// importing Router here
app.get("/", (req, res, next) => {
    res.send("working")
})
app.use("/api/v1/user", User)
app.use("/api/v1/college", college)


// using Error middleware
app.use(errorMiddleware)

export default app
