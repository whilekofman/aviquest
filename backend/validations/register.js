const { check } = require('express-validator')
const handleValidationErrors= require('./handleValidationErrors');

const validateRegistrationInput = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Email is invalid'),
    check('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 1, max: 30 })
        .withMessage('Username must be between 1 and 30 characters'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6, max: 30 })
        .withMessage('Password must be between 6 and 30 characters'),
    handleValidationErrors
];


module.exports = validateRegistrationInput
