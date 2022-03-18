import path from 'path';
import express from 'express';
import fs from 'fs';
var router = express.Router();
var images = ['js'];

router.get('/image/skills/:picture', (req, res) =>{
    var picture = req.params.picture;
    var thePic = path.join(__dirname, `../../public/images/skills/${picture}`);
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
        res.header("Access-Control-Allow-Origin", "*");
        res.send(picNames);
    })
});

export default router;