const express = require("express")
const Task =require('../../models/task')
const router =new express.Router()


router.delete('/tasks/:id',async(req,res)=>{

    try{
        const id =req.params.id
        const task =await Task.findByIdAndDelete(id)
        if (!task){
            res.status(404).send("Task provided does not exist")
        }
        res.send('Task deleted:'+ task)

    }
    catch(error){
        res.status(500).send(error)
    }

})
//Rest End point to update tasks
router.patch('/tasks/:id',async (req,res)=> {
    try {
        const updates =Object.keys(req.body)
        const allowedUpdates=['description','completed']
        const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
        if (!isValidOperation) {
            return res.status(400).send({ error: 'Invalid updates!' })
        }            
        const id = req.params.id
        const task = await Task.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
        if (!task){
            return res.status(404).send("Invalid Task provided")
        }
        res.send(task)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

// app.get('/users/:id', (req, res) => {
//     const _id = req.params.id
//     console.log(req.params)
//     User.findById(_id).then((user) => {
//         if (!user) {
//             return res.status(404).send("No User Found")
//         }
//         res.status(200).send(user)
//     }).catch((error) => {
//         res.status(500).send(error)
//     })
// })


//Rest End point to a create a task
router.post('/tasks', async (req, res) => {
    //console.log(req.body)
    try {
        task = new Task(req.body)
        task = await task.save()
        console.log(task)
        res.send(task)
    }
    catch (error) {
        res.status(400).send(error)
        //res.send(error)
    }
})

//Rest End point to get all tasks

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({})
        if (!tasks) {
            res.status(400).send()
        }
        console.log(tasks)
        res.status(200).send(tasks)
    }
    catch (error) {
        res.status(500).send(error)
    }
})


//Rest End point to get retreive a task by id

router.get('/tasks/:id', async (req, res) => {
    try {
        const _id = req.params.id
        task = await Task.findById(_id)
        if (!task) {
            res.status(400).send()
        }
        res.send(task)
    }
    catch (error) {
        req.send(500).send(error)

    }
})


module.exports=router




