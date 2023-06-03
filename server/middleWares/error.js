export const errorMiddleware = (err, req, res, next) => {

    err.message = err.message || "internal server Error"
    err.statusCode = err.statusCode || 500;

    if (err.code === 11000) {
        err.message = `Dublicate ${Object.keys(err.keyValue)} Entered`
        err.statusCode = 400;
    }
    if (err.name === "CastError") {
        err.message = `Invalid ${err.path}`
        err.statusCode = 400;
    }




    res.status(400).json({
        success: false,
        status: err.statusCode,
        message: err.message
    })
}

export const asyncError = (passFunc) => (req, res, next) => {
    Promise.resolve(passFunc(req, res, next)).catch(next)

}