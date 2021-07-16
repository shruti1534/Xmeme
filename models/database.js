const mongoose = require('mongoose')
const Schema = mongoose.Schema

const memeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'This field is required']
    },
    caption: {
        type: String,
        required: [true,'This field is required']
    },
    memeURL: {
        type: String, 
        required: [true,'This field is required']
    },
},
{timestamps: true}
)

module.exports = mongoose.model('database', memeSchema)
