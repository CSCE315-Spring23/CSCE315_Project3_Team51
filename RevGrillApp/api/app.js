const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const newRoute = require('./routes/newRoute');

// tables
const ordersRoute = require('./routes/order_table');
const ingredientsRoute = require('./routes/ingredient_table');
const itemsRoute = require('./routes/item_table');
const employeesRoute = require('./routes/employee_table');

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

app.use('/orders', ordersRoute);
app.use('/ingredients', ingredientsRoute);
app.use('/items', itemsRoute);
app.use('/employees', employeesRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
