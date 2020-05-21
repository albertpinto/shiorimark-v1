//router task to create bookmarks

const express = require("express")
const Bookmark =require("../../models/bookmark")
const router =new express.Router()

//Rest End point to a create a task
router.post('/bookmarks', async (req, res) => {
    //console.log(req.body)
    try {
        bookmark = new Bookmark(req.body)
        bookmark = await bookmark.save()
        console.log(bookmark)
        res.send(bookmark)
    }
    catch (error) {
        res.status(400).send(error)
        //res.send(error)
    }
})

module.exports=router









