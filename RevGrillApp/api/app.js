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

// tables
var ordersRoute = require('./routes/order_table');
var ingredientsRoute = require('./routes/ingredient_table');
var itemsRoute = require('./routes/item_table');
var employeesRoute = require('./routes/employee_table');

// manager side
var managerRoute = require('./routes/manager_side');

// server/customer/menu side
var serverRoute = require('./routes/server_side');

// login page
var loginRoute = require('./routes/login');

var app = express();

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

app.use('/orders', ordersRoute);
app.use('/ingredients', ingredientsRoute);
app.use('/items', itemsRoute);
app.use('/employees', employeesRoute);

// Manager side functions
app.use('/manager_side', managerRoute);
app.use('/most_used_items', managerRoute);
app.use('/get_sells_together', managerRoute);
app.use('/restock_report', managerRoute);
app.use('/sales_report', managerRoute);
app.use('/excess_report', managerRoute);
app.use('/x_report', managerRoute);
app.use('/z_report', managerRoute);
app.use('/edit_item', managerRoute);
app.use('/add_item', managerRoute);
app.use('/remove_item', managerRoute);
app.use('/get_inventory', managerRoute);
app.use('/edit_inventory', managerRoute);
app.use('/new_day', managerRoute);
app.use('/employee_info', managerRoute);
app.use('/get_sales', managerRoute);

// Server/Customer/Menu side functions
app.use('/server_side', serverRoute);
app.use('/last_order_number', serverRoute);
app.use('/create_order', serverRoute);
app.use('/update_inventory', serverRoute);
app.use('/get_menu', serverRoute);
app.use('/get_ingredients', serverRoute);
app.use('/get_category_items', serverRoute);
app.use('/get_orders', serverRoute);
app.use('/get_order_by_num', serverRoute);

// Login page functions
app.use('/login', loginRoute);
app.use('/is_employee', loginRoute);
app.use('/is_manager', loginRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
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
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


