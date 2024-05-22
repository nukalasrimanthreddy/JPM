const express = require('express')
const app= express()
const foodRoute = require('./routes/food.route')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/food',foodRoute)
app.listen(3000)
