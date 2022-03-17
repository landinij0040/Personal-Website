// var express = require('express');
import path from 'path';
import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/image/:number', (req, res, next) => {
  console.log(req.params.number); 
  var number = req.params.number;
  var thePic = path.join(__dirname, `../../public/images/${number}.png`);
  res.header("Access-Control-Allow-Origin", "*");
  res.sendFile(thePic);
});

// module.exports = router;
export default router;
