//import * as Employee from './api_func/Employee.js'

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var newRoute = require('./routes/newRoute');
var empRoute = require('./routes/emp_routes');
const app = express();

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/newRoute', newRoute);
app.use('/employee',empRoute);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.get('./is_employee' , (req,res) => {
  try {
    res.send(Employee.isEmployee(req.body))
  } catch (err) {
    res.status(500).send('Isn\'t an manager');
  }
});

app.get('./is_manager' , (req,res) => {
try {
  res.send(Employee.isManager)
} catch (err) {
  res.status(500).send('Isn\'t an manager');
}
})

app.get('./emp_info' , (req,res) => {
try {
  res.send(Employee.employeeInfo(req.params.Id))
} catch (err) {
  res.status(500).send('Isn\'t an employee');
}
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


