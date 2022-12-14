const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const passport = require('passport')
const { loginUser, restoreUser, requireUser } = require('../../config/passport')
const { isProduction } = require('../../config/keys')
const validateRegisterInput = require('../../validations/register');
const validateLoginInput = require('../../validations/login');
const validateRegistrationInput = require('../../validations/register');
const usersController = require('../../controllers/usersController')


router.get('/', async (req, res, next) => {
    try {
      const users = await User
        .find()
        .populate()
        return res.json(users);

    } catch (err) {
      return res.json([])
    }
});



router.get('/current', restoreUser, (req, res) =>{
    if(!isProduction) {
      const csrfToken = req.csrfToken();
      res.cookie("CSRF-TOKEN", csrfToken)
    }
    if (!req.user) return res.json(null);
    res.json({
        _id: req.user._id,
        username: req.user.userName,
        email: req.user.email,
        items: req.user.items,
        equipment: req.user.equipment,
        quest: req.user.quest,
        attack: req.user.attack,
        coins: req.user.coins,
        maxHealth: req.user.maxHealth,
        currentHealth: req.user.currentHealth,
        avitar: req.user.imageUrl,
        movingImageUrl: req.user.movingImageUrl

    })
})

router.post('/login', validateLoginInput, async (req, res, next) => {
    passport.authenticate('local', async (err, user) => {
        if (err) return next(err);
        if (!user) {
            const err = new Error('Invalid credentials');
            err.statusCode = 400;
            err.errors = { email: 'Invalid credentials' };
            return next(err)
        }
        return res.json(await loginUser(user));
    }) (req, res, next);
})

router.post('/register', validateRegistrationInput, async(req, res, next) => {
    const user = await User.findOne({
        $or: [{ email: req.body.email }, { userName: req.body.username }]
    });


    if (user) {
        const err = new Error("Validation Error");
        err.statusCode = 400;
        const errors = {};
        if (user.email === req.body.email) {
            errors.email = "A user has already registered using that email address"  
        }
        if (user.userName === req.body.userName) {
            errors.username = "That username is already in use"
        }
        err.errors = errors;
        return next(err);
    }
    const newUser = new User({
        userName: req.body.username,
        email: req.body.email
    });

    bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(req.body.password, salt, async (err, hashedPassword) => {
        try {
            newUser.hashedPassword = hashedPassword;
            const user = await newUser.save();
            return res.json(await loginUser(user));    
          }
          catch(err) {
              next(err);
          }
      })
    })
})

router.patch('/:id', requireUser, usersController.updateAttributes)



module.exports = router;
