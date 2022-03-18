import path from 'path';
import express from 'express';
import fs from 'fs';
var router = express.Router();
var images = ['js'];

router.get('/image/skills/:number', (req, res) =>{
    var number = parseInt(req.params.number);
    console.log(typeof number );
    console.log(images);
    var imageName = images[number];
    console.log(imageName);
    var thePic = path.join(__dirname, `../../public/images/skills/${imageName}.png`); 
    console.log(thePic)
    res.header("Access-Control-Allow-Origin", "*");
    res.sendFile(thePic);    
});

router.get('/image/skills/', (req, res) => {
    var thePath = path.join(__dirname, '../../public/images/skills');
    var picNames = [];
    // console.log(thePath); // TODO: Delete
    fs.readdir(thePath, (err, files) => {
        files.forEach( file => {
            picNames.push(file);
        });
        console.log(picNames); // TODO: Delete Later
        res.send(picNames);
    })
});

export default router;