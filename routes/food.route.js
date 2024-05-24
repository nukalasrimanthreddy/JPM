const express = require('express')
const router = express.Router();
const foodModel = require('../models/food.model')
router.use(express.json())
router.use(express.urlencoded({extended:true}))
const protect = require('../middleware/auth')

router.get('/',protect,async (req,res)=>{
    const userId = req.user
    const food = await foodModel.find({user:userId})
    res.json(food)
})

router.post('/',protect,async (req,res)=>{
    const userId = req.user
    const {name, calories} = req.body
    const food = await foodModel.create({
        user:userId,
        name,
        calories
     })
    res.status(200).json(food)
})
router.delete('/:id',async (req,res)=>{
    const id = req.params.id
    const food = await foodModel.findByIdAndDelete(id)
    res.status(200).json(food)
})
module.exports = router