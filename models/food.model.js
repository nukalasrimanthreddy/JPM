const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/suseats')

const Schema = mongoose.Schema({
    user:mongoose.Schema.Types.ObjectId,
    name:String,
    calories:Number
})
const foodModel = mongoose.model('food',Schema)

module.exports = foodModel