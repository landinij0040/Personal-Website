// var express = require('express');
import express from 'express';
// var path = require('path');
import path from 'path';
// var cookieParser = require('cookie-parser');
import cookieParser from 'cookie-parser';
// var logger = require('morgan');
import logger from 'morgan';
// var indexRouter = require('./routes/index');
import indexRouter from './routes/index';
// var usersRouter = require('./routes/users');
import usersRouter from './routes/users';

import imagesRouter from './routes/images';

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../../FrontEndResume/build')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/images', imagesRouter);

// module.exports = app;
export default app;
