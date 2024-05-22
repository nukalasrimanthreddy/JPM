const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test')

const Schema = mongoose.Schema({
    _id:Number,
    name:String,
    calories:Number
})
const foodModel = mongoose.model('food',Schema)

module.exports = foodModel