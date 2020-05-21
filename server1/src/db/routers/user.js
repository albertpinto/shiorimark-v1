const express = require("express")
const User =require('../../models/user')
const router =new express.Router()
const bcryptjs =require("bcryptjs")
const auth =require("../../middleware/auth")

var cors = require('cors')
router.use(cors())


//Rest End point to a create User
router.post('/users', async (req, res) => {
    //console.log(req.body)
    const user = new User(req.body)
    try {
        await user.save()
        const token =await user.generateAuthToken()
        res.send({user,token})
    }
    catch (error) {
        console.log("Error:" + error)
        res.status(400).send(error)
    }
})

router.post('/users/login', async(req,res)=> {
    //const user = new User(req.body)
    try {

        const user =await User.findByCredentials(req.body.email,req.body.password)
        console.log (user)
        const token =await user.generateAuthToken()
        res.send({user,token})

    }
    catch(error) {
        console.log(error)
        res.status(400).send(error)
    }

})

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})

//Rest End point to a return all users

router.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).send(users)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

//Rest End point to find a user with a specific id
router.get('/users/:id', async (req, res) => {
    try {
        const _id = req.params.id
        console.log(req.params)
        const user = await User.findById(_id)
        res.status(200).send(user)
    }
    catch (error) {
        if (!user) {
            console.log(error)
            return res.status(404).send("No User Found")
        }
    }
})

//Rest End point to update users

router.patch('/users/:id', async (req, res) => {
    try {

        const updates = Object.keys(req.body)
        const allowedUpdates = ['name', 'email', 'password']
        const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

        if (!isValidOperation) {
            return res.status(400).send({ error: 'Invalid updates!' })
        }

        const id = req.params.id
        //const user = await User.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })

        const user =await User.findById(id)
        updates.forEach((update)=>{
            user[update]=req.body[update]
        })
        console.log ("Before Saving....")
        if (user.isModified("password")) {
            user.password = await bcryptjs.hash(user.password,8)
            console.log ("Hi dear " +user.password)
        }
        await user.save()
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)

    }
    catch (error) {
        res.send(400).send(error)

    }
})


router.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findByIdAndDelete(id)
        if (!user) {
            res.status(404).send("User provided does not exist")
        }
        res.send('User deleted:' + user)

    }
    catch (error) {
        res.status(500).send(error)
    }

})

module.exports=router