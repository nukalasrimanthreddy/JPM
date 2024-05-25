const express = require('express')
const router = express.Router();
const RequestModel = require('../models/request.model')
const foodModel = require('../models/food.model')
const userModel = require('../models/user.model')
const protect = require('../middleware/auth');
router.use(express.json())
router.use(express.urlencoded({extended:true}))

router.post('/user',protect,async(req,res)=>{
    const {user , food} = req.body
    const foods = await foodModel.findById(food)
    console.log(foods)
    const result = await RequestModel.create({
        user,
        foodID:food,
        foodName:foods.name,
        calories:foods.calories,
        status:"Pending"
    })
    res.status(200).json(result)
})
router.get('/admin',protect,async(req,res)=>{
    const result = await RequestModel.find({})
    res.status(200).json(result)
})
router.get('/user',protect,async(req,res)=>{
    const userId = req.user
    const users = await userModel.findById(userId)
    const result = await RequestModel.find({
        user:users.username
    })
    res.status(200).json(result)
})
router.put('/admin',protect,async(req,res)=>{
    const { id } = req.body
    const request =await  RequestModel.findByIdAndUpdate(id,{
        status:'Approved'
    })
    const foods = await foodModel.findByIdAndDelete(request.foodID)
    res.status(200).json(request)
})

module.exports = router