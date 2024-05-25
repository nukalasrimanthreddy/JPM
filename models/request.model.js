const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    user:String,
    foodID:mongoose.Schema.Types.ObjectId,
    foodName:String,
    calories:Number,
    status:String
})
const RequestModel = mongoose.model('request',Schema)

module.exports = RequestModel