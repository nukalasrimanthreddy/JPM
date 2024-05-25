const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const schema = mongoose.Schema({
    username:String,
    role:String,
    email:String,
    password:String
})

schema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Method to compare hashed password with plain text password
schema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

schema.methods.getId = async function(){
    return this._id
}
const userModel = mongoose.model('user',schema)
module.exports = userModel