const express = require('express');
const mongoose = require('mongoose');
const Task = mongoose.model('Task');
const User = mongoose.model('User');
const router = express.Router();
const { requireUser } = require('../../config/passport')

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
        .sort({ createdAt: -1 })
        // .populate("user", "_id", username);
        return res.json(tasks);
    } catch (err) {
      return res.json([])
    }
});
router.post("/", async (req, res, next) => { // requireUser, tasks/new? /new??
    try {
        const newTask = new Task({
            user: req.user._id,
            title: req.body.text,
            body: req.body.body,
            isComplete: req.body.isComplete,
            difficulty: req.body.difficulty
        })
    let task = await newTask.save();
    res.json(task)

    } catch (err){
        next(err)
    }
}) 
router.delete('/:id', async (req, res, next) => { //requireUser, tasks/:id? || :userId/:id
    try {
        const task = await Task.findById(req.params.id)
            .delete(task)
        res.json()
    } catch (err) {
        next(err)
    }
})
// router.patch('/:id', async (req, res, next) => {  // requireUser,tasks/:id? || :userId/:id
//     try {
//         let task = Task.findById(req.params.id) 
//         const updateTask = {
//             user: req.user._id,
//             title: req.body.text,
//             body: req.body.body,
//             isComplete: req.body.isComplete,
//             difficulty: req.body.difficulty
//         }
//     } catch (err) {
//         next(err)
//     }
// })
// router.create

module.exports = router;