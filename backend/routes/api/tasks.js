
const express = require('express');
const mongoose = require('mongoose');
const Task = mongoose.model('Task');
const User = mongoose.model('User');
const router = express.Router();
const { requireUser, restoreUser } = require('../../config/passport')
const { findByIdAndUpdate } = require('../../models/User');
// add middleware for requireUser, add validators both to validation file and as middleware 



router.get('/user/:userId', async (req, res, next) => {
    let user;
    try {
        user = await User.findById(req.params.userId);
    } catch (err) {
        const error = new Error('User not found');
        error.statusCode = 404;
        error.errors = { message: "No user found" }
        return next(error);
    }
    try {
      const tasks = await Task.find({ user: user._id })
        // .sort({ createdAt: -1 })
        .populate("user", "userName");
        return res.json(tasks);

    } catch (err) {
      return res.json(['am i an error'])
    }
});
router.get('/:id', requireUser, async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id)
        console.log(task)
        if (!task.user._id.equals(req.user._id)){ 
            const error = new Error('Not the ownere of this task');
            error.statusCode = 400;
            error.errors = { message: 'Please do not edit tasks that do not belong to you' }
        } else {
             res.json(task)
        }
        } catch (err) {
            next(err)
        }
})


router.post("/", requireUser, async (req, res, next) => { // requireUser, tasks/new? /new??
    let user = await User.findById(req.user._id);
    try {
        const newTask = new Task({
            user: req.user._id,
            title: req.body.title,
            body: req.body.body,
            isComplete: req.body.isComplete,
            difficulty: req.body.difficulty
        })
    let task = await newTask.save();
    user.tasks.push(task)
    user.save()
    res.json(task)

    } catch (err){
        next(err)
    }
}) 
router.delete('/:id', requireUser, async (req, res, next) => { //requireUser, tasks/:id? || :userId/:id
    try {
        const task = await Task.findById(req.params.id)
        if (!task.user._id.equals(req.user._id)){ 
            const error = new Error('Not the ownere of this task');
            error.statusCode = 400;
            error.errors = { message: 'Please do not edit tasks that do not belong to you' }
        } else {
            task.delete({_id: req.params.id })
            User.updateOne({ _id: req.user._id }, {$pull: { tasks: req.params.id }}, (err, task) => {
                if (err) {
                    res.json(err)
                } else {
                    res.status(200).json(task)
                }          
            })
        }
    } catch (err) {
        next(err)
    }
})
router.patch('/:id', requireUser, async (req, res, next) => {  // requireUser,tasks/:id? || :userId/:id
    try {
        let task = await Task.findById(req.params.id) 
        // console.log(task)
        if (!task.user._id.equals(req.user._id)){ 
            const error = new Error('Not the ownere of this task');
            error.statusCode = 400;
            error.errors = { message: 'Please do not edit tasks that do not belong to you' }
        } else {
            
            const updatedTask = {
                user: req.user._id,
                title: req.body.title,
                body: req.body.body,
                isComplete: req.body.isComplete,
                difficulty: req.body.difficulty
            } 
            console.log(updatedTask)
            task = await Task.findOneAndUpdate({ _id: req.params.id },  {
                user: req.user._id,
                title: req.body.title,
                body: req.body.body,
                isComplete: req.body.isComplete,
                difficulty: req.body.difficulty
            }  )
            return res.json(task);
    }
    } catch (err) {
        next(err)
    }
})

module.exports = router;