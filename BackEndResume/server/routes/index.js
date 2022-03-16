// var express = require('express');
import path from 'path';
import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/image', (req, res, next) => {
  console.log('in the router get for /image'); 
  var thePic = path.join(__dirname, '../../public/images/test.jpg');

  res.sendFile(thePic);
});

// module.exports = router;
export default router;
