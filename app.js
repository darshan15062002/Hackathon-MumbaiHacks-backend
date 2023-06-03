import express from 'express'
import { config } from 'dotenv'
import { errorMiddleware } from './server/middleWares/error.js'
import cookieParser from 'cookie-parser'

// import user from './server/routes/user.js'
import college from './server/routes/college.js'

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
// app.use("/api/v1/user", user)
app.use("/api/v1/college", college)


// using Error middleware
app.use(errorMiddleware)

export default app
