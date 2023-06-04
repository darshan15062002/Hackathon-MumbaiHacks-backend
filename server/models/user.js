import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const schema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "please enter name"]
    },
    email: {
        type: String,
        require: [true, "please enter email"],
        unique: [true, "email already exist"],
        validate: validator.isEmail,
    },
    password: {
        type: String,
        require: [true, "please enter password"],
        minLength: [6, "password must be 6 character long"],
        select: false
    },

    otp: Number,
    otp_expire: Date,

});
schema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password, 10)
})

schema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// gernerate jwt token
schema.methods.gernerateToken = async function () {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
        expiresIn: '2d',
    })
}


const User = mongoose.model("User", schema)

export default User