const express = require('express');
require('./models/User');
require('./models/Task')
require('./config/passport');
const passport = require('passport')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const csurf = require('csurf')
const debug = require('debug');
const { isProduction } = require('./config/keys');

const usersRouter = require('./routes/api/users');
const tasksRouter = require('./routes/api/tasks');
const csrfRouter = require('./routes/api/csrf');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(passport.initialize());

if (!isProduction){
    app.use(cors());
}

app.use(csurf({
        cookie: {
            secure: isProduction,
            sameSite: isProduction && "Lax",
            httpOnly: true
        }
    })
);


app.use('/api/users', usersRouter);
app.use('/api/tasks', tasksRouter);
app.use('/api/csrf', csrfRouter);

app.use((req, res, next) => {
    const err = new Error('Is this the place that you want to be is this the page you want to see?');
    err.statusCode = 404;
    next(err);
});

const serverErrorLogger = debug('backend:error');

app.use((err, req, res, next) => {
    serverErrorLogger(err);
    const statusCode = err.statusCode || 500;
    res.status(statusCode);
    res.json({
        message: err.message,
        statusCode,
        errors: err.errors
    })
}); 


module.exports = app;
