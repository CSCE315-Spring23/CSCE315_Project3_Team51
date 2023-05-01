//import * as Employee from './api_func/Employee.js'

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var newRoute = require('./routes/newRoute');

// tables
// var ordersRoute = require('./routes/order_table');
// var ingredientsRoute = require('./routes/ingredient_table');
// var itemsRoute = require('./routes/item_table');
// var employeesRoute = require('./routes/employee_table');

// manager side
var mostUsedRoute = require('./routes/manager_side');
var sellsTogetherRoute = require('./routes/manager_side');
var restockRepRoute = require('./routes/manager_side');
var salesRepRoute = require('./routes/manager_side');
var excessRepRoute = require('./routes/manager_side');
var xRepRoute = require('./routes/manager_side');
var zRepRoute = require('./routes/manager_side');
var editItemRoute = require('./routes/manager_side');
var addItemRoute = require('./routes/manager_side');
var removeItemRoute = require('./routes/manager_side');
var inventoryRoute = require('./routes/manager_side');
var editInvRoute = require('./routes/manager_side');
var newDayRoute = require('./routes/manager_side');
var employeeInfoRoute = require('./routes/manager_side');
var salesRoute = require('./routes/manager_side');

// server/customer/menu side
var lastOrderNumRoute = require('./routes/server_side');
var createOrderRoute = require('./routes/server_side');
var updateInvRoute = require('./routes/server_side');
var getMenuRoute = require('./routes/server_side');
var getIngrRoute = require('./routes/server_side');
var getCategoryRoute = require('./routes/server_side');
var getOrdersRoute = require('./routes/server_side');
var getOrderByNumRoute = require('./routes/server_side');

// login page
var isEmployeeRoute = require('./routes/login');
var isManagerRoute = require('./routes/login');

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

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/newRoute', newRoute);

// app.use('/orders', ordersRoute);
// app.use('/ingredients', ingredientsRoute);
// app.use('/items', itemsRoute);
// app.use('/employees', employeesRoute);

// Manager side functions
app.use('/most_used_items', mostUsedRoute);
app.use('/get_sells_together', sellsTogetherRoute);
app.use('/restock_report', restockRepRoute);
app.use('/sales_report', salesRepRoute);
app.use('/excess_report', excessRepRoute);
app.use('/x_report', xRepRoute);
app.use('/z_report', zRepRoute);
app.use('/edit_item', editItemRoute);
app.use('/add_item', addItemRoute);
app.use('/remove_item', removeItemRoute);
app.use('/get_inventory', inventoryRoute);
app.use('/edit_inventory', editInvRoute);
app.use('/new_day', newDayRoute);
app.use('/employee_info', employeeInfoRoute);
app.use('/get_sales', salesRoute);

// Server/Customer/Menu side functions
app.use('/last_order_number', lastOrderNumRoute);
app.use('/create_order', createOrderRoute);
app.use('/update_inventory', updateInvRoute);
app.use('/get_menu', getMenuRoute);
app.use('/get_ingredients', getIngrRoute);
app.use('/get_category_items', getCategoryRoute);
app.use('/get_orders', getOrdersRoute);
app.use('/get_order_by_num', getOrderByNumRoute);

// Login page functions
app.use('/is_employee', isEmployeeRoute);
app.use('/is_manager', isManagerRoute);

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


