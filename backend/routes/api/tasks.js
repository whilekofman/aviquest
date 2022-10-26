const express = require('express');
const mongoose = require('mongoose');
const Task = mongoose.model('Task');
const User = mongoose.model('User');
const router = express.Router();
const { requireUser } = require('../../config/passport')

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
router.post("/tasks/new", async (req, res, next) => {
    try {
        const newTask = new Task({
            text: req.body.text,
            user: req.user._id //, ? MIGHT NEED A COMMA
        })
    let task = await newTask.save();
    res.json(task)

    } catch (err){
        next(err)
    }
}) 
router.delete('/tasks/:id', async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id)
            .delete(task)
        res.json()
    } catch (err) {
        next(err)
    }
})
// router.patch('/:taskId', requireUser, async (req, res, next) => {
//     try {
//         const 
//     } catch (err) {
//         next(err)
//     }
// })
// router.create

module.exports = router;