import path from 'path';
import express from 'express';
import fs from 'fs';
var router = express.Router();
var images = ['js'];

router.get('/image/:folder/:picture', (req, res) =>{
    var picture = req.params.picture;
    console.log(picture);
    var folder = req.params.folder;
    console.log(folder)
    var thePic = path.join(__dirname, `../../public/images/${folder}/${picture}`);
    console.log(thePic);
    res.header("Access-Control-Allow-Origin", "*");
    res.sendFile(thePic);    
});

router.get('/image/:folder', (req, res) => {
    var folder = req.params.folder;
    var thePath = path.join(__dirname, `../../public/images/${folder}`);
    var picNames = [];
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