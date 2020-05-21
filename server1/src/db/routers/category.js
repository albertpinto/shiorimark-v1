const express =require('express')
const Category = require('../../models/category.js')
const router = new express.Router()


router.post('/categories', async (req,res) => {
    console.log (req.body)
    try {
        category = new Category(req.body)
        category  = await category.save()
        res.send(category)     

    }

    catch(error) {
        console.log(error)
        res.status(400).send(error)
    }
})

module.exports=router