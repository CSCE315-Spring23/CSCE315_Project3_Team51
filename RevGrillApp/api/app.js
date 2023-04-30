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
var mostUsedRoute = require('./routes/most_used_items');
var sellsTogetherRoute = require('./routes/get_sells_together');
var restockRepRoute = require('./routes/restock_report');
var salesRepRoute = require('./routes/sales_report');
var excessRepRoute = require('./routes/excess_report');
var xRepRoute = require('./routes/x_report');
var zRepRoute = require('./routes/z_report');
//editItem
//addItem
//removeItem
var inventoryRoute = require('./routes/get_inventory');
//editInventory
//signalNewDay
//employeeInfo
var salesRoute = require('./routes/get_sales');

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
app.use('/most_used_items', mostUsedRoute);
app.use('/get_sells_together', sellsTogetherRoute);
app.use('/restock_report', restockRepRoute);
app.use('/sales_report', salesRepRoute);
app.use('/excess_report', excessRepRoute);
app.use('/x_report', xRepRoute);
app.use('/z_report', zRepRoute);
//editItem
//addItem
//removeItem
app.use('/get_inventory', inventoryRoute);
//editInventory
//signalNewDay
//employeeInfo
app.use('/get_sales', salesRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
