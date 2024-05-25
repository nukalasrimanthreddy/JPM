const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const router = express.Router();
const userModel = require('../models/user.model')
router.use(express.json())
router.use(express.urlencoded({extended:true}))
router.post('/register',async (req,res)=>{
    const {username,role,email,password} = req.body
    const user = await userModel.create({ username, role, email, password});
    res.status(200).json(user)
})

router.post('/login',async (req,res)=>{
    const {email,password} = req.body
    const user = await userModel.findOne({email})
    if(!user) return res.status(400).json({message:'User not found'})
    const id = user._id
    const validPassword = await user.matchPassword(password)
    if(!validPassword)
        return res.status(400).json({message:'Invalid password'})
    const token = jwt.sign({id},"cvrcoe")
    res.json({ token, user: { id: user._id, username: user.username, role: user.role }});
})
module.exports = router