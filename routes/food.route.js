const express = require('express')
const router = express.Router();
const foodModel = require('../models/food.model')
router.use(express.json())
router.use(express.urlencoded({extended:true}))

router.get('/',async (req,res)=>{
    const food = await foodModel.find({})
    res.json(food)
})
router.post('/',async (req,res)=>{
    const _id = req.body.id
    const {name, calories} = req.body
    const student = await foodModel.create({
        _id,
        name,
        calories
     })
    res.status(200).json(student)
})

module.exports = router