const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017")


const schema = mongoose.Schema({
    username:String,
    email:String,
    password:String
})
const studentModel = mongoose.model(user,schema)

module.exports = studentModel