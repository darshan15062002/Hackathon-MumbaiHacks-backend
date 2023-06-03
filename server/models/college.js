import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    college: {
        type: String,
        require: [true, "please enter college name"]
    },
    dept: [
        {
            dname: {
                type: String,
                require: [true, "please enter dname"]
            },
            percentile: {
                type: Number,
                require: [true, "please enter percentile"]
            }

        }
    ]

})

const colleges = mongoose.model('colleges', schema)
export default colleges